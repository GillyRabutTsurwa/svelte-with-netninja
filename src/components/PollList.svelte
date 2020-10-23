<script>
  //NEW: lifecycle hooks, unlike in Vue, need to be imported
  import { onMount, onDestroy } from "svelte";
  import PollStore from "../store/PollStore.js";
  import PollDetails from "./PollDetails.svelte";

  export let polls = [];

  /** IMPORTANTNOTE:
   * Everytime the data in our store changes - this is coming later - {storeName}.subscribe is called. It is also called everytime the component wherewhich the store is being used is mounted. Doing this without unsubscribing from the store when the component is destroyed is not good for memory. So it is good practise to unsubscribe from the store each time it is not in use (when the component is destroyed for example).
   *
   * To do this, we assign our subscribe method a variable, and invoke this method in our onDestroy life-cycle hook. So, in our case, callToUnsub is assigned with our subscription code, and we call this function in our onDestroy lifecycle hook: callToUnsub().
   *
   * QUESTION: Hold up, is callToUnsub an IIFE?
   *
   */

  const callToUnsub = PollStore.subscribe(data => {
    polls = data;
    console.log(data);
  });

  //NEW: lifecycle hooks. more info on theme here https://svelte.dev/tutorial/onmount

  onMount(() => {
    console.log("PollList component est monté");
  });

  onDestroy(() => {
    console.log("PollList component est enlevé de DOM");
    callToUnsub();
    console.log(callToUnsub); // Curiosité
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
