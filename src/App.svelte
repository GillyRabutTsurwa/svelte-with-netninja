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
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    min-height: 5000px;
  }

  h1,
  h2 {
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
      justify-content: center;
      align-items: center;
    }
    .loop-div > * {
      margin-right: 10px;
    }
  }
</style>

<main>
  <h1>Loops</h1>
  <h2>How to do loops in svelte</h2>
  <div class="container">
    <!-- How to make a loop in Svelte -->
    <!-- #each ARRAYNAME as ITERATORVARIABLE -->
    <!-- takes a KEY, just like vue. It is taken as parantheses -->
    {#each people as currentPerson (currentPerson.id)}
      <div class="loop-div">
        <h4>{currentPerson.name}</h4>
        <p>{currentPerson.age} years old</p>
        <strong>{currentPerson.colourBelt}</strong>
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
</main>
