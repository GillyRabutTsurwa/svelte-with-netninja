<script>
  import Tete from "./components/Header.svelte";
  import Pied from "./components/Footer.svelte";
  import Tabs from "./components/shared/Tabs.svelte";
  import PollForm from "./components/PollForm.svelte";
  import PollList from "./components/PollList.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  //NEW:
  let polls = [
    {
      id: 1,
      question: "Python or Javascript",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 15
    }
  ];

  //NEW:
  const handleAdd = e => {
    console.log(e.detail);
    const newPoll = e.detail;
    polls = [newPoll, ...polls]; //Using the spread operator. Niceee.
    console.log(polls);
    // Ca va switcher vers le current polls juste apres avoir soumis notre form.
    activeItem = "Current Polls";
  };

  // function that runs when event emisson from child to parent is called
  const changeTab = e => {
    activeItem = e.detail;
    console.log(e.detail);
  };

  //NEW:
  let component;
  $: activeItem === "Current Polls"
    ? (component = PollList)
    : (component = PollForm);
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
  <!-- * NEWIMPORTANTNOTE: Au début, je pensais qu'on pouvais pas déclarer un évenement transferé (dispatched) d'enfant au parent si le parent déclare ce compenent dynamiquement (parmi les autres). Mais on peut le faire (comme j'ai fais dessous avec on:add). C'est parce que Svelte sait associer l'evenement déclaré avec le component enfant qui le transfère (l'evenement).
  C'est à dire. Cette déclaration ci-dessous (on:add) pour écouter l'evenement venant d'un component enfant est associée avec le component PollForm parce que c'est ce component qui transfere l'evenement. Ça, c'est super.
  QUESTION: VueJS et React peuvent-elle faire la même chose ? -->
  <!-- Ignore this warning: <PollForm> was created with unknown prop 'pollsProp'. for now. Je viens de verifier la structure de l'application et ca c'est pas le cas. -->
  <svelte:component this={component} on:add={handleAdd} pollsProp={polls} />
  <Pied />
</main>
