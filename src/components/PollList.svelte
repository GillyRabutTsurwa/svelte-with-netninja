<script>
  export let pollsProp = [];
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
</style>

<div class="poll-list">
  {#each pollsProp as currentPoll (currentPoll.id)}
    <div>{currentPoll.question}</div>
  {/each}
</div>
