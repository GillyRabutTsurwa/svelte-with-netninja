<script>
  export let messageProp;
  export let showModalProp = false;
  export let isPromo = false;
</script>

<style>
  .modal {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .modal__content {
    padding: 1em;
    border-radius: 1em;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background-color: #fff;
  }

  .promo .modal__content {
    background-color: crimson;
    color: #fff;
  }
</style>

{#if showModalProp}
  <!-- NOTE: For event forwarding from parent to child, we make a click event that does not do anything...In Vue, we use the this.$emit(). Much simpler in Svelte, mais ça va prendre des temps pour m'habituer -->
  <div class="modal" class:promo={isPromo} on:click>
    <div class="modal__content">
      <p>{messageProp}</p>
    </div>
  </div>
{/if}
