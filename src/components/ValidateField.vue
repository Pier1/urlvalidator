<template>
  <div class="m-validateField o-flexRow" id="validateField">
    <label v-if="true" for="validateField" class="o-validateField--label m-flexRowItem --label">Enter URL to validate, otherwise fill fields below to build URL.</label>
    <div class="m-flexRowItem">
      <input name="validateField" class="o-validateField--input" placeholder="https://www.example.com/example?example=true" @input="updateModel" />
    </div>
    <div class="m-flexRowItem">
      <button class="o-validateField--button">Validate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValidateField',
  methods: {
    updateModel($event) {
      this.$emit('update', $event.target.value);
    }
  }
};
</script>

<style lang="scss">
.m-validateField {
  .o-validateField--input {
    display: block;
    width: 100%;
  }
}
</style>
