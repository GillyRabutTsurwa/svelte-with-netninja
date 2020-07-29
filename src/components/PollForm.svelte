<script>
  import Button from "./shared/Button.svelte";
  let fields = {
    question: "",
    answerA: "",
    answerB: ""
  };

  // NEW:
  let errors = {
    question: "",
    answerA: "",
    answerB: ""
  };
  let isValid = false;

  const submitHandler = () => {
    console.log(fields);
    isValid = true;
    // TODO: validate question
    if (fields.question.length < 5) {
      isValid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }
    // TODO: validate answer A
    if (fields.answerA.length < 1) {
      isValid = false;
      errors.answerA = "Answer must be at least 1 characters long";
    } else {
      errors.answerA = "";
    }
    // TODO: validate answer B
    if (fields.answerB.length < 1) {
      isValid = false;
      errors.answerB = "Answer must be at least 5 characters long";
    } else {
      errors.answerB = "";
    }

    // add new poll is valid is true
    if (isValid) {
      console.log("isValid is true if u c this", fields);
    }
  };
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  input {
    width: 90%;
    border-radius: 6px;
  }

  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input type="text" id="question" bind:value={fields.question} />
    {#if fields.question.length < 5}
      <div class="error">{errors.question}</div>
    {:else}
      <span>&check;</span>
    {/if}
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    {#if fields.answerA.length < 5}
      <div class="error">{errors.question}</div>
    {:else}
      <span>&check;</span>
    {/if}
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    {#if fields.answerB.length < 5}
      <div class="error">{errors.question}</div>
    {:else}
      <span>&check;</span>
    {/if}
  </div>
  <Button type="secondary" flat="true">Add Poll</Button>
</form>
