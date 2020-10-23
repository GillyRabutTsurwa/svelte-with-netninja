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
    polls = [newPoll, ...polls]; //* NOTE: Kumbuka, polls, n'existe plus ici. On va le reparer + tard.
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

    let copiedPolls = [...polls]; // NOTE: Same issue here as well,
    let upVotedPoll = copiedPolls.find(currentPoll => currentPoll.id === id);

    if (option === "A") {
      upVotedPoll.votesA++;
    } else if (option === "B") {
      upVotedPoll.votesB++;
    }

    polls = copiedPolls; // NOTE: and here. Nilisahau kuongeza maoni yangu hapa kwa branch iliyopita
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
