<script>
  let firstName = "Diddy";
  let lastName = "Kong";
  let beltColour = "black";
  //   NEW: REACTIVE VALUES;
  $: fullName = `${firstName} ${lastName}`;
  //   NEW: REACTIVE STATEMENTS run code reactively, not just watch for value changes:
  $: console.log(beltColour);
  //   NEW: CAN ALSO PUT REACTIVE IN CODE BLOCKS
  $: {
    console.log(beltColour);
    console.log(fullName);
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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
    input:focus {
      outline: none;
    }
  }
</style>

<main>
  <h1>Reactive Values</h1>
  <h2>Reactive Values & Reactive Statements</h2>
  <p>{fullName} - {beltColour} belt</p>
  <input type="text" bind:value={firstName} />
  <input type="text" bind:value={lastName} />
  <input type="text" bind:value={beltColour} />
</main>
