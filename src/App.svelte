<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const handleAdd = e => {
    console.log(e.detail);
    const newPoll = e.detail;
    polls = [newPoll, ...polls]; //* NOTE: polls n'existe plus, et on a pas mis a jour ce composant pour utiliser le store.
    console.log(polls);
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

    let copiedPolls = [...polls]; // NOTE: Hiyo shida fulani iko hapa pia.
    let upVotedPoll = copiedPolls.find(currentPoll => currentPoll.id === id);

    if (option === "A") {
      upVotedPoll.votesA++;
    } else if (option === "B") {
      upVotedPoll.votesB++;
    }

    polls = copiedPolls;
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
  <!-- NEW: we removed the pollsProp prop and it will no longer be passing down the polls array down to the PollsList component  -->
  <svelte:component this={component} on:add={handleAdd} on:vote={handleVote} />
  <Pied />
</main>
