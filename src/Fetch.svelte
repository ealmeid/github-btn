<script lang="ts">
  export let request;
</script>

{#await request}
  <slot name="fallback" />
{:then data}
  <slot {data} />
{:catch error}
  <slot name="error" {error} />
{/await}
