<script>
  //NEW:
  import { createEventDispatcher } from "svelte";
  import Card from "./shared/Card.svelte";
  export let singlePollProp;

  const dispatch = createEventDispatcher();

  // Reactive Value.
  $: totalVotes = singlePollProp.votesA + singlePollProp.votesB;

  //NEW: handling votes
  const handleVote = (option, id) => {
    dispatch("vote", {
      option: option,
      id: id
    });
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
</style>

<!-- NEW: -->
<Card>
  <div class="poll">
    <h3>{singlePollProp.question}</h3>
    <p>Total votes: {totalVotes}</p>
    <div on:click={() => handleVote('A', singlePollProp.id)} class="answer">
      <div class="percent percent-A" />
      <span>{singlePollProp.answerA} ({singlePollProp.votesA})</span>
    </div>
    <div on:click={() => handleVote('B', singlePollProp.id)} class="answer">
      <div class="percent percent-B" />
      <span>{singlePollProp.answerB} ({singlePollProp.votesB})</span>
    </div>
  </div>
</Card>
