<script>
  import Modal from "./Modal.svelte";

  let show = false;

  const openModal = () => {
    show = true;
    console.log("opening");
  };
  const closeModal = () => (show = false);
</script>

<style>
  .btn {
    position: absolute;
    right: 10px;
    bottom: 0;
    width: 100px;
    height: 100px;
    background: red;
    color: white;
  }
</style>

<button class="btn" on:click={openModal}>+</button>
{#if show}
  <Modal onClose={closeModal} />
{/if}
