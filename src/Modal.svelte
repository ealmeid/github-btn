<script lang="ts">
  type Event = "CreateEvent" | "WatchEvent";
  import events from "./api/github/events";

  export let username;
  export let onClose: () => void;

  let activityReq = events.get(username);

  function parseEventType(event: Event) {
    switch (event) {
      case "CreateEvent":
        return "Create";
      case "WatchEvent":
        return "Starred";
      default: {
        // TODO: send error to logging service store
        console.error(`Unhandled GitHub event type: ${event}`);
        return "Unknown Event";
      }
    }
  }
</script>

<style class="Modal">
  .Modal {
    z-index: 1994;
    position: absolute;
    width: 300px;
    height: 500px;
    overflow: auto;
    right: 10px;
    bottom: 0px;
    box-shadow: 0 9px 18px rgba(34, 36, 38, 0.2);
    border-radius: 9px;
    background: #fff;
  }

  .Close {
    position: absolute;
    right: 0;
  }
</style>

<div class="Modal">
  <div class="Close" on:click={onClose}>
    <slot name="CloseBtn" />
  </div>

  {#await activityReq}
    <p>Loading..</p>
  {:then userActivityEvents}
    Events:
    <ul>
      {#each userActivityEvents as event}
        <li>
          <p>
            [{parseEventType(event.type)}]
            <b>{event.repo.name}</b>
          </p>
        </li>
      {/each}
    </ul>
  {:catch e}
    <p>Error: {e.message}</p>
  {/await}
</div>
