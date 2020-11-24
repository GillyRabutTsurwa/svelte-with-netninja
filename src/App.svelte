<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  //TESTING:
  import { onMount } from "svelte";
  import PollStore from "./store/PollStore.js";

  onMount(() => {
    // Faut ajouter le $, car $PollStore !== PollStore;
    console.log($PollStore);
  });

  //PASS: Everywhere that was polls was declared, which we're no longer using, is now replaced with $PollStore. Voici la solution. Tout marche comme désiré

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  //NOTE: On l'utilise plus
  // let polls = [
  //   {
  //     id: 1,
  //     question: "Python or Javascript?",
  //     answerA: "Python",
  //     answerB: "Javascript",
  //     votesA: 9,
  //     votesB: 15
  //   }
  // ];

  //NEW:
  const handleAdd = e => {
    console.log(e.detail);
    const newPoll = e.detail;
    $PollStore = [newPoll, ...$PollStore]; //* NOTE: The issue is here with the store
    // console.log(polls);
    activeItem = "Current Polls";
  };

  const changeTab = e => {
    activeItem = e.detail;
    console.log(e.detail);
  };

  let component;
  $: activeItem === "Current Polls"
    ? (component = PollList)
    : (component = PollForm);

  // NEW:
  const handleVote = e => {
    const { id, option } = e.detail;

    let copiedPolls = [...$PollStore]; // Same issue as before, on l'utilise plus polls
    let upVotedPoll = copiedPolls.find(currentPoll => currentPoll.id === id);

    if (option === "A") {
      upVotedPoll.votesA++;
    } else if (option === "B") {
      upVotedPoll.votesB++;
    }

    $PollStore = copiedPolls;
  };
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
  <svelte:component this={component} on:add={handleAdd} on:vote={handleVote} />
  <Pied />
</main>
