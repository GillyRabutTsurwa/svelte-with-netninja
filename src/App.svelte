<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  // function that runs when event emisson from child to parent is called
  const changeTab = e => {
    activeItem = e.detail;
    console.log(e.detail);
  };

  //NEW:
  let component;
  $: activeItem === "Current Polls"
    ? (component = PollList)
    : (component = PollForm);
</script>

<style>
  main {
    /* STYLES COMING SOO */
  }
</style>

<main>
  <Tete />
  <Tabs
    itemsProp={items}
    activeItemProp={activeItem}
    on:tabChange={changeTab} />
  <svelte:component this={component} />
  <Pied />
</main>
