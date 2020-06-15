<script>
  let name;
  let beltColour;
  let age;

  //NEW: event dispatcher. think of it as event forwarding, but unlike event forwarding, we are able to send DATA along with the event. Crucial difference.
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();

  let skills = [];

  const handleSubmit = () => {
    console.log(dispatch);
    const person = {
      name: name,
      beltColour: beltColour,
      age: age,
      skills: skills,
      id: Math.random()
    };
    //NOTE: syntaxe - dispatch(eventName, dataToSend)
    dispatch("addPerson", person);
  };
</script>

<style>
  button {
    cursor: pointer;
  }
</style>

<form on:submit|preventDefault={handleSubmit}>
  <div class="inputs">
    <input type="text" placeholder="Name" bind:value={name} />
    <input type="number" placeholder="Age" bind:value={age} />
    <!-- NEW: CHECKBOXES -->
    <label for="">Skills</label>
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
    <select bind:value={beltColour}>
      <option value="black">black</option>
      <option value="orange">orange</option>
      <option value="brown">brown</option>
      <option value="white">white</option>
    </select>
  </div>
  <button>Add Person</button>
</form>
