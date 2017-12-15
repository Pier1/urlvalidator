<template>
  <div class="m-validateField" id="validateField">
    <label v-if="true" for="validateField" class="o-validateField--label">Enter URL to validate, otherwise fill fields below to build URL.</label>
    <input name="validateField" class="o-validateField--input" placeholder="https://www.example.com/example?example=true"/>
    <button class="o-validateField--button">Validate</button>
  </div>
</template>

<script>
export default {
  name: 'ValidateField'
};
</script>

<style lang="scss">
.m-validateField {
  .o-validateField--label {
    display: block;
  }
}
</style>
