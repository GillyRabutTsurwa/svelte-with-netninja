<script>
  //NEW: Importing our store.
  import PollStore from "../store/PollStore.js";
  import PollDetails from "./PollDetails.svelte";

  // IMPORTANTNOTE:Puisque ce composant ne prend plus le prop de son parent (App), je vais enlever le mot-clé export et changer le nom de pollsProp à polls
  export let polls = [];

  /** NOTE:
   * This is how we access the data in our store:
   * {storeName}.subscribe() takes a callback function in which our store data can be accessed.
   * We simply pass the data arguement, (maybe we can call it whatever. sijui) on the callback.
   * data is like the state "data that is in our store", in our case, the array. look at Pollstore.js
   */
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
