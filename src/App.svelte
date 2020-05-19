<script>
  let name = "Yoshi";
  let beltColour = "black";

  const handleClick = () => {
    beltColour == "black" ? (beltColour = "brown") : (beltColour = "black");
  };
  //NOTE: not using this. works for the ways that are commented out
  // const handleInput = e => {
  //   beltColour = e.target.value;
  // };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
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
  <h1>Hello {name}!</h1>
  <h2>This will cover videos 1-4</h2>
  <!-- NOTE: below is the same as v-bind:style="{color: beltColour} in Vue -->
  <p style="color: {beltColour}">{beltColour} belt</p>
  <button on:click={handleClick}>Toggle Belt Colour</button>
  <!-- NOTE: Below input does one way binding, will comment out and leave as reference -->
  <!-- <input type="text" on:input={handleInput} /> -->
  <!-- NOTE: Below input does two way binding, will comment out and leave as reference -->
  <!-- <input type="text" on:input={handleInput} value={beltColour} /> -->
  <!-- NOTE: Below input is the shorthand two way binding for the very one above -->
  <!-- bind:property. This is alot like v-bind in vue -->
  <input type="text" bind:value={beltColour} />
</main>
