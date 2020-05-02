<script>
  let people = [
    { name: "Yoshi", colourBelt: "black", age: 25, id: 1 },
    { name: "Mario", colourBelt: "orange", age: 45, id: 2 },
    { name: "Luigi", colourBelt: "brown", age: 35, id: 3 },
    { name: "Peach", colourBelt: "brown", age: 35, id: 4 },
    { name: "Daisy", colourBelt: "brown", age: 35, id: 5 },
    { name: "Browser", colourBelt: "brown", age: 35, id: 6 },
    { name: "Toad", colourBelt: "brown", age: 35, id: 7 }
  ];

  const handleDelete = (e, id) => {
    console.log(e);
    // delete the current person from the people array
    people = people.filter(currentPerson => currentPerson.id != id);
  };

  let num = 0;
  const increment = () => num++;
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
  }
</style>

<main>
  <h1>Conditionals</h1>
  <h2>If Statements in Svelte</h2>
  <h3>We're using the array loop section from previous lessonss</h3>
  <div class="container">
    <!-- How to make a loop in Svelte -->
    <!-- #each ARRAYNAME as ITERATORVARIABLE -->
    <!-- takes a KEY, just like vue. It is taken as parantheses -->
    {#each people as currentPerson (currentPerson.id)}
      <div class="loop-div">
        <div class="loop-div__info">
          <h4>{currentPerson.name}</h4>
          <p>{currentPerson.age} years old</p>
          <p>{currentPerson.colourBelt}</p>
        </div>
        <div class="loop-div__conditional">
          {#if currentPerson.colourBelt === 'black'}
            <strong>Master Ninja</strong>
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
