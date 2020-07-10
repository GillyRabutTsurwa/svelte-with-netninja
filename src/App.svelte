<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
</script>

<style>
  main {
    max-width: 96rem;
  }
</style>

<main>
  <h2>STOPPED AT 5:55</h2>
  <Tete />
  <Tabs itemsProp={items} activeItemProp={activeItem} />
  <Pied />
</main>
