//NEW: we are making the store.
import { writable } from "svelte/store";

// Initalise the store
const PollStore = writable([
  {
    id: 1,
    question: "Python or Javascript?",
    answerA: "Python",
    answerB: "Javascript",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
