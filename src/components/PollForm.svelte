<script>
  let fields = {
    question: "",
    answerA: "",
    answerB: ""
  };

  const submitHandler = () => {
    console.log(fields);
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
    width: 100%;
    border-radius: 6px;
  }
</style>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input type="text" id="question" bind:value={fields.question} />
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
  </div>
  <button>Add Info</button>
</form>
