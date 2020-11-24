<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  import { onMount } from "svelte";
  import PollStore from "./store/PollStore.js";

  onMount(() => {
    console.log($PollStore);
  });

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const handleAdd = e => {
    console.log(e.detail);
    const newPoll = e.detail;

    // NOTE: $PollStore = [newPoll, ...$PollStore]; code I had before video
    // upon watching this video, the code below does the exact same thing as the one above.
    // code I now havea after video

    //IMPORTANT: In this video, Shaun doesn't dispatch any data from the children to the this parent component. So, all the Poll.update() are not found here, but in their respective child components. I may make a separate branch fully showing how the Ninja did it.

    //NEW: Here I leanrt PollStore.update().
    // I still like the way of changing the value of the pollstore (like I did the branch 14.12B): Doing, $PollStore = {desiredValue} like in line 21. I also haven't found anything wrong with this method, as of right now. I will familiarise myself with both and do my research on this.
    PollStore.update(currentPolls => {
      return [newPoll, ...currentPolls];
    });
    // console.log(polls);
    activeItem = "Current Polls";
  };

  const changeTab = e => {
    activeItem = e.detail;
    console.log(e.detail);
  };

  let component;
  $: activeItem === "Current Polls"
    ? (component = PollList)
    : (component = PollForm);

  const handleVote = e => {
    const { id, option } = e.detail;

    //NOTE: Again, this... which was my solution before the video (in branch 14.12B)
    // let copiedPolls = [...$PollStore];
    // let upVotedPoll = copiedPolls.find(currentPoll => currentPoll.id === id);

    // if (option === "A") {
    //   upVotedPoll.votesA++;
    // } else if (option === "B") {
    //   upVotedPoll.votesB++;
    // }

    // $PollStore = copiedPolls;

    // Is the same as this, Shaun's solution, upon watching the video.
    //NEW: PollStore.update()
    PollStore.update(currentPolls => {
      let copiedPolls = [...currentPolls];
      let upVotedPoll = copiedPolls.find(currentPoll => currentPoll.id === id);

      if (option === "A") {
        upVotedPoll.votesA++;
      } else if (option === "B") {
        upVotedPoll.votesB++;
      }

      return copiedPolls;
    });
  };
</script>

<style>
  main {
    /* STYLES COMING SOO */
  }
</style>

<main>
  <Tete />
  <Tabs
    itemsProp={items}
    activeItemProp={activeItem}
    on:tabChange={changeTab} />
  <svelte:component this={component} on:add={handleAdd} on:vote={handleVote} />
  <Pied />
</main>
