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
      <PollDetails singlePollProp={currentPoll} />
    </div>
  {/each}
</div>
