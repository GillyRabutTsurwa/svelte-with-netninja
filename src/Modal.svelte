<script>
  let showModal = true;
  let isPromo = true;
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
      <p>Sign Up for Offers</p>
    </div>
  </div>
{/if}
