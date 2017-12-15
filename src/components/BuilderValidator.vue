<template>
  <div class="m-builderValidator" id="builderValidator">
    <ValidateField />
  </div>
</template>

<script>
import ValidateField from './ValidateField';

export default {
  name: 'BuilderValidator',
  components: {
    ValidateField
  }
};
</script>

<style lang="scss">
.m-builderValidator {
  max-width: $max-container-width;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.25);
  margin: 1rem auto;
  padding: 1rem;
}
</style>
