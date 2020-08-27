<script lang="ts">
  import Modal from "./Modal.svelte";

  export let username;

  let show = false;
  const openModal = () => (show = true);
  const closeModal = () => (show = false);
</script>

<style>
  .Btn {
    z-index: 1993;
    position: absolute;
    right: 10px;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: cyan;
    border-radius: 200%;
  }

  .CloseBtn {
    width: 30px;
    height: 30px;
    border: 2px solid cyan;
    border-radius: 200%;
  }
</style>

<button class="Btn" on:click={openModal}>+</button>
{#if show}
  <Modal onClose={closeModal} {username}>
    <button slot="CloseBtn" class="CloseBtn">X</button>
  </Modal>
{/if}
