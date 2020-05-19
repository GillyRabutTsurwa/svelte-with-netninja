<script>
  let name;
  let beltColour;
  let age;
  // declaring all these variables is not efficient
  // let fighting = false;
  // let sneaking = false;
  // let running = false;

  let skills = [];

  const handleSubmit = () => {
    // console.log(name, beltColour, age, fighting, sneaking, running);
    console.log(name, beltColour, age, skills);
  };
</script>

<style>
  button {
    cursor: pointer;
  }
</style>

<!-- NOTE: on:submit|preventDefault is just like e.preventDefault() in vanilla -->
<!-- NOTE: Prolly the most used event modifier for forms -->
<form on:submit|preventDefault={handleSubmit}>
  <div class="inputs">
    <input type="text" placeholder="Name" bind:value={name} />
    <input type="number" placeholder="Age" bind:value={age} />
    <!-- NEW: CHECKBOXES -->
    <label for="">Skills</label>
    <!-- NOTE: how to check if a checkbox is checked. 
    We can use the checked attribute
     -->
    <!-- THis method below is not efficient, especially if we have a lot of variables which we want to check the truth or false values. The Alternative is below this commented out code. -->
    <!-- <input type="checkbox" bind:checked={fighting} />
    Fighting
    <br />
    <input type="checkbox" bind:checked={sneaking} />
    Sneaking
    <br />
    <input type="checkbox" bind:checked={running} /> 
    Running 
    <br /> -->
    <input type="checkbox" bind:group={skills} value="fighting" />
    Fighting
    <br />
    <input type="checkbox" bind:group={skills} value="sneaking" />
    Sneaking
    <br />
    <input type="checkbox" bind:group={skills} value="running" />
    Running
    <br />
    <label>Belt Colour:</label>
    <!-- NOTE: Cannot explain what is going on here succintly, but if we pick the black option for example, then beltColour = black. 
    So I think how it works is that we bind the our beltColour variable to our select element and its option children will determine the value of beltColour (upon which one is selected) based on their values... j'espère que cette deuxième partie fait du sens.
     -->
    <select bind:value={beltColour}>
      <option value="black">black</option>
      <option value="orange">orange</option>
      <option value="brown">brown</option>
      <option value="white">white</option>
    </select>
  </div>
  <button>Add Person</button>
</form>
