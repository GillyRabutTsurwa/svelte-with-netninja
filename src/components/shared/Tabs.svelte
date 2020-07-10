<script>
  // our props
  export let itemsProp;
  export let activeItemProp;
</script>

<style>

</style>

<div class="tabs">
  <ul>
    {#each itemsProp as currentItem}
      <li>
        <div>{currentItem}</div>
      </li>
    {/each}
  </ul>
</div>
