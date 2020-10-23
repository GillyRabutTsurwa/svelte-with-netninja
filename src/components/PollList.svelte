<script>
  /** NEWIMPORTANT
   * For the alternative way of unsubscribing, instead of making a variable and assigning our data to it, we refer to the store directly as our "variable" by using the ${storeName} syntaxe.
   *
   * Therefore, the lifecycle hooks and the store.subscribe() are no longer needed. Also, the variable used to hold the store data - which in our case was the polls array - is no longer needed.
   *
   * I still don't know which method I like best. Cette syntaxe est plus propre, mais l'autre est plus explicit. Néanmoins, il me faut savoir utiliser les deux.
   *
   */
  import PollStore from "../store/PollStore.js";
  import PollDetails from "./PollDetails.svelte";
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
  {#each $PollStore as currentPoll (currentPoll.id)}
    <div>
      <PollDetails singlePollProp={currentPoll} on:vote />
    </div>
  {/each}
</div>
