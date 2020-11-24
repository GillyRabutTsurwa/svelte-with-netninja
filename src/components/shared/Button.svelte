<script>
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    border: 2px solid transparent;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  .primary {
    background-color: #d91b42;
    color: #fff;
  }

  .secondary {
    background-color: #45c496;
    color: #fff;
  }

  .flatClass {
    box-shadow: none;
  }

  .primary.inverseClass {
    background-color: #fff;
    color: #d91b42;
    border: 2px solid #d91b42;
  }

  .secondary.inverseClass {
    background-color: #fff;
    color: #45c496;
    border: 2px solid #45c496;
  }
</style>

<button
  on:mouseenter={() => (inverse = !inverse)}
  on:mouseleave={() => (inverse = !inverse)}
  class={type}
  class:flatClass={flat}
  class:inverseClass={inverse}
  on:click>
  <slot />
</button>
