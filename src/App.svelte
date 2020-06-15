<script>
  import Modal from "./Modal.svelte";
  import AddPersonForm from "./AddPersonForm.svelte";
  let showModal = false;
  let skills = [];

  let people = [
    { name: "Yoshi", beltColour: "black", age: 25, id: 1 },
    { name: "Mario", beltColour: "orange", age: 45, id: 2 },
    { name: "Luigi", beltColour: "brown", age: 35, id: 3 },
    { name: "Peach", beltColour: "brown", age: 35, id: 4 },
    { name: "Daisy", beltColour: "brown", age: 35, id: 5 },
    { name: "Browser", beltColour: "brown", age: 35, id: 6 },
    { name: "Toad", beltColour: "brown", age: 35, id: 7 }
  ];

  const handleDelete = (e, id) => {
    console.log(e);
    people = people.filter(currentPerson => currentPerson.id != id);
  };

  let num = 0;
  const increment = () => num++;

  const toggleModal = () => {
    showModal = !showModal;
  };
  // The method that references the dispatch event ie. the method that will have access to all our information (through the e parametre, specifically e.detail) so that we can use and manipulate that data however we want
  const addPerson = e => {
    console.log(e);
    console.log(e.detail);
    let newPerson = e.detail;
    people = [...people, newPerson];
    // skills = e.detail.skills;
    console.log(people);
    showModal = false;
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1,
  h2,
  h3 {
    color: #ff3e00;
    text-transform: uppercase;
  }

  h1 {
    font-size: 4em;
    font-weight: 100;
  }

  h2 {
    font-size: 1.5em;
    font-weight: 300;
  }

  h3 {
    font-size: 1em;
    font-weight: 500;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }

    .loop-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .loop-div > * {
      margin-right: 10px;
    }
    button {
      cursor: pointer;
    }
  }
</style>

<!-- NOTE: the click listener in the modal component is the event emitted up from the child component (same way an event is emitted up to the parent in vue). Here where the child component is defined, we simply initiate a click listener. Easy. -->
<Modal showModalProp={showModal} on:click={toggleModal}>
  <!-- NEW: listening to the event dispatch from the child -->
  <AddPersonForm on:addPerson={addPerson} />
</Modal>
<main>
  <button on:click={toggleModal}>Open Modal</button>
  <div class="container">
    {#each people as currentPerson (currentPerson.id)}
      <div class="loop-div">
        <div class="loop-div__info">
          <h4>{currentPerson.name}</h4>
          <p>{currentPerson.age} years old</p>
          <p>{currentPerson.beltColour}</p>
        </div>
        <div class="loop-div__conditional">
          {#if currentPerson.beltColour === 'black'}
            <strong>Master Ninja</strong>
          {/if}
        </div>
        <!-- NEW: -->
        <div class="loop-div__skills">
          {#if currentPerson.skills}
            {#each currentPerson.skills as currentSkill}
              <p>{currentSkill}</p>
            {/each}
          {/if}
        </div>
        <button
          on:click={e => {
            handleDelete(e, currentPerson.id);
          }}
          class="delete">
          Delete
        </button>
      </div>
    {:else}
      <p>
        Il n'y a personnne pour afficher. Didn't know you could use this in each
        blocks.
      </p>
    {/each}
  </div>

  <p>
    <em>Styling is terrible. Allow me</em>
  </p>

  <hr />

  <button on:click={increment}>Increment</button>
  <span>{num}</span>
  {#if num >= 20}
    <p>You've reached 20</p>
  {:else if num == 10}
    <p>Halfway there</p>
  {/if}
</main>
