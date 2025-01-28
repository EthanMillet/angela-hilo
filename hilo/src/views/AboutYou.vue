
<template>
  <div class="about-you-container">
    <h1>About You</h1>
    <form class="about-you-form">
      <div class="form-group">
        <label>Do you have flight experience?</label>
        <select>
          <option>Choose one...</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div class="form-group">
        <label>How many hours do you have?</label>
        <input type="text" placeholder="Type hours..." />
      </div>
      <div class="form-group">
        <label>Which of these ratings do you have?</label>
        <select multiple>
          <option>Select all that apply...</option>
          <option>Rating A</option>
          <option>Rating B</option>
        </select>
      </div>
      <button type="submit" class="submit-button">Next</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AboutYou",
};
</script>

<style scoped>
.about-you-container {
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.about-you-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
