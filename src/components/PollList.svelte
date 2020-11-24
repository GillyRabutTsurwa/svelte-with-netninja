<script>
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
