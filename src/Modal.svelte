<script>
  // NEW: HOW TO ACCESS A PROP FROM THE PARENT
  // Think of it as the props object property in Vue. Just way different syntaxe
  export let messageProp;
  let showModal = true;
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

{#if showModal}
  <!-- Just like vue. we will get the class promo if isPromo is true -->
  <div class="modal" class:promo={isPromo}>
    <div class="modal__content">
      <p>{messageProp}</p>
    </div>
  </div>
{/if}
