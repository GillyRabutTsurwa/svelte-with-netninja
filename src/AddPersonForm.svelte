<script>
  let name;
  let beltColour;
  let age;
  const handleSubmit = () => {
    console.log(name, beltColour, age);
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
    <input type="text" placeholder="Belt Colour" bind:value={beltColour} />
    <input type="number" placeholder="Age" bind:value={age} />
    <!-- NEW: CHECKBOXES -->
    <label for="">Skills</label>
    <input type="checkbox" checked={true} id="" />
    Fighting
    <br />
    <input type="checkbox" name="" id="" />
    Sneaking
    <br />
    <input type="checkbox" name="" id="" />
    Running
    <br />
  </div>
  <button>Add Person</button>
</form>
