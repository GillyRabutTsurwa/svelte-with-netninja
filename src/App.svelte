<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const changeTab = e => {
    activeItem = e.detail;
    console.log(e.detail);
  };
</script>

<style>
  main {
    /* max-width: 96rem; */
    /* margin: 0 auto; */
  }
</style>

<main>
  <Tete />
  <Tabs
    itemsProp={items}
    activeItemProp={activeItem}
    on:tabChange={changeTab} />
  {#if activeItem === 'Current Polls'}
    <PollList />
  {:else if activeItem === 'Add New Poll'}
    <PollForm />
  {/if}
  <Pied />
</main>
