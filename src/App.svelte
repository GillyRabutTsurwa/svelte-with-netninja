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

  //NEW: changing the value of component (which I'm led to believe is a reserved svelte keyword) to render appropriate component.
  let component;
  // function changeCompo() {
  //   // activeItem === items[0] ? (component = PollList) : (component = PollForm);
  //   // The above code works but I will switch items[0] with "Current Polls",
  //   // I do this so that it looks for current polls despite of where it is in the array... hypothetically speaking
  //   activeItem === "Current Polls"
  //     ? (component = PollList)
  //     : (component = PollForm);
  //   return component;
  // }

  //NOTE: Even better than the above. Instead of making a function, Je vais utiliser les valeurs reactives. Equivalent of computed properties in Vue.
  // I wills still keep code above for reference.
  $: activeItem === "Current Polls"
    ? (component = PollList)
    : (component = PollForm);
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
  <svelte:component this={component} />
  <Pied />
</main>
