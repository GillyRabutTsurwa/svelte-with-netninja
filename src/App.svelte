<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  //NEW:
  let polls = [
    {
      id: 1,
      question: "Python or Javascript?",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 15
    }
  ];

  //NEW:
  const handleAdd = e => {
    console.log(e.detail);
    const newPoll = e.detail;
    polls = [newPoll, ...polls]; //Using the spread operator. Niceee.
    console.log(polls);
    // Ca va switcher vers le current polls juste apres avoir soumis notre form.
    activeItem = "Current Polls";
  };

  // function that runs when event emisson from child to parent is called
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
    const { id, option } = e.detail; // on utilise la destrucutration des objets ici.

    let copiedPolls = [...polls];
    // target selected poll
    let upVotedPoll = copiedPolls.find(currentPoll => currentPoll.id === id);

    //update selected poll
    if (option === "A") {
      upVotedPoll.votesA++;
    } else if (option === "B") {
      upVotedPoll.votesB++;
    }

    // reassign polls to updated polls.
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
  <svelte:component
    this={component}
    on:add={handleAdd}
    pollsProp={polls}
    on:vote={handleVote} />
  <Pied />
</main>
