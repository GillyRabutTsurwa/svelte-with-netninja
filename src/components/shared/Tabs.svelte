<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  // our props
  export let itemsProp;
  export let activeItemProp;
</script>

<style>
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }

  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>

<div class="tabs">
  <ul>
    {#each itemsProp as currentItem}
      <li on:click={() => dispatch('tabChange', currentItem)}>
        <div class:active={currentItem === activeItemProp}>{currentItem}</div>
      </li>
    {/each}
  </ul>
</div>
