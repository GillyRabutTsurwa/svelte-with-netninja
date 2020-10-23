//NEW: we are making the store.
import { writable } from "svelte/store";

// NEW: Initalise the store with the data that we want to put inside the store. In this case, it's the array that was originally in the App.svelte component (named polls) that was passed down to The App Component's child, PollList as a prop. Hatuifanyi namna hivyo sasa.
//IDEA: We could also put this array in its own variable and put the variable as the argument instead of the actual array. Je vais peut-être faire plus tard.
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
