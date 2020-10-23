<script>
  //NEW: Importing our store.
  import PollStore from "../store/PollStore.js";
  import PollDetails from "./PollDetails.svelte";

  // IMPORTANTNOTE:Puisque ce composant ne prend plus le prop de son parent (App), je vais enlever le mot-clé export et changer le nom de pollsProp à polls
  export let polls = [];

  // NEW: Calling our store to use
  // NEW: data is the state "data that is in our store", in our case, the array. look at Pollstore.js
  PollStore.subscribe(data => {
    polls = data;
    console.log(data);
  });
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin: 0 4rem;
  }
</style>

<div class="poll-list">
  {#each polls as currentPoll (currentPoll.id)}
    <div>
      <PollDetails singlePollProp={currentPoll} on:vote />
    </div>
  {/each}
</div>
