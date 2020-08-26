<script>
  export let onClose;
</script>

<style class="Modal">
  .Modal {
    z-index: 1994;
    position: absolute;
    width: 300px;
    height: 500px;
    left: 33%;
    box-shadow: 0 9px 18px rgba(34, 36, 38, 0.2);
    border-radius: 9px;
    background: #fff;
  }
</style>

<div class="Modal">
  Modal
  <button on:click={onClose}>CLOSE</button>
</div>
