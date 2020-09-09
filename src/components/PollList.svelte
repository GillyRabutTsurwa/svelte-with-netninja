<script>
  import PollDetails from "./PollDetails.svelte";
  export let pollsProp = [];
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
