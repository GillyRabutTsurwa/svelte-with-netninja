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

  let component;
  function changeCompo() {
    activeItem === "Current Polls"
      ? (component = PollList)
      : (component = PollForm);
    return component;
  }
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
  <!-- NEW: Dynamic component to render appropriate component -->
  <svelte:component this={changeCompo()} />
  <Pied />
</main>
