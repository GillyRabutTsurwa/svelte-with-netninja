<script>
  import { createEventDispatcher } from "svelte";
  import Card from "./shared/Card.svelte";
  import Button from "./shared/Button.svelte";
  //NEW: Importing store. I'm doing it here, because unlike Shaun, I don't use the store in this component up to this point. He uses it earlier, for updating votes and those tings
  import PollStore from "../store/PollStore.js";

  export let singlePollProp;

  const dispatch = createEventDispatcher();

  $: totalVotes = singlePollProp.votesA + singlePollProp.votesB;
  $: percentA = Math.floor((100 / totalVotes) * singlePollProp.votesA);
  $: percentB = Math.floor((100 / totalVotes) * singlePollProp.votesB);

  const handleVote = (option, id) => {
    dispatch("vote", {
      option: option,
      id: id
    });
  };

  //NEW: functionality do delete a single poll.
  const handleDelete = id => {
    PollStore.update(currentPolls => {
      return currentPolls.filter(
        currentSinglePoll => currentSinglePoll.id !== id
      );
    });
    // NOTE: reminder: Even though I will keep the above method (no pun intended), based on what we've learnt, we can also do this. comment out between these two to test:

    // $PollStore = $PollStore.filter(currentPoll => currentPoll.id !== id);
  };
</script>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 0.6rem;
    font-size: 1.4rem;
    color: #aaa;
    margin-bottom: 3rem;
  }
  .answer {
    position: relative;
    background-color: #fafafa;
    margin: 1rem auto;
    cursor: pointer;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 1rem 2rem;
  }
  .percent {
    position: absolute;
    height: 100%;
  }

  .percent-A {
    background-color: rgba(217, 27, 66, 0.2);
    border-left: 4px solid #d91b42;
  }

  .percent-B {
    background-color: rgba(69, 196, 150, 0.2);
    border-left: 4px solid #45c496;
    /* background-color: rgba(69, 196, 66, 0.2); lequel est meilleur? */
  }

  /* NEW: delete class. simple tings */
  .delete {
    margin-top: 3rem;
    text-align: center;
  }
</style>

<!-- NEW: -->
<Card>
  <div class="poll">
    <h3>{singlePollProp.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div on:click={() => handleVote('A', singlePollProp.id)} class="answer">
      <div class="percent percent-A" style="width: {percentA}%" />
      <span>{singlePollProp.answerA} ({singlePollProp.votesA})</span>
    </div>
    <div on:click={() => handleVote('B', singlePollProp.id)} class="answer">
      <div class="percent percent-B" style="width: {percentB}%" />
      <span>{singlePollProp.answerB} ({singlePollProp.votesB})</span>
    </div>
    <div class="delete">
      <!-- IMPORTANT: The on:click below has to be forwarded from the child component because this below, is not an actual HTML element. So we cannot put on:click on its own independently. No wonder it was not working -->
      <Button flat={false} on:click={() => handleDelete(singlePollProp.id)}>
        Delete
      </Button>
    </div>
  </div>
</Card>
