<script>
  /** NEW: EVENT MODIFIERS: Voici quelques examples
   * once = l'evenement ne sera lancé qu'une fois (removes handler after)
   * preventDefault = empêche le comportement defaut. (comme e.preventDefault())
   * self = l'evenement ne sera lancé qu'à l'élément cliqué.
   *
   **/

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
  <!-- NOTE: How to use the event modifier: eventToListen|eventModifier -->
  <div class="modal" class:promo={isPromo} on:click|self>
    <div class="modal__content">
      <!-- NEW: slots, just like in Vue. Same with named slots. Useful for passing blocks of HTML within a component -->
      <slot name="title" />
      <slot />
    </div>
  </div>
{/if}
