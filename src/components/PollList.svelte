<script>
  //NEW: lifecycle hooks, unlike in Vue, need to be imported
  import { onMount, onDestroy } from "svelte";
  import PollStore from "../store/PollStore.js";
  import PollDetails from "./PollDetails.svelte";
  export let pollsProp = [];

  // unsubscribe from store. by putting variable. Will come back to this branch and write better notes
  const callToUnsub = PollStore.subscribe(data => {
    pollsProp = data;
    console.log(data);
  });

  //NEW: lifecycle hooks. more info on theme here https://svelte.dev/tutorial/onmount

  onMount(() => {
    console.log("PollList component est monté");
  });

  onDestroy(() => {
    console.log("PollList component est enlevé de DOM");
    callToUnsub();
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
  {#each pollsProp as currentPoll (currentPoll.id)}
    <div>
      <!-- NEWIMPORTANT: En ne définant une fonctionne pour on:vote, cet evenement est transferer a son parent. Ce que l'on veut.  -->
      <!-- Ce composant est le liason de transferer des données spécifiques de son componsant enfant vers son composant parent. Car en peut pas faire directement (on n'utilise pas encore le store) -->
      <PollDetails singlePollProp={currentPoll} on:vote />
    </div>
  {/each}
</div>
