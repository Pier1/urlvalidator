<template>
  <div class="m-header" id="header">
    <div class="o-headerWrapper">
      <h1 class="a-heading">Url Validator</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss">
.m-header {
  min-height: $min-nav-height;
  background-color: #09689d;
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.25);
  .o-headerWrapper {
    max-width: $max-container-width;
    min-height: $min-nav-height;
    margin: 0 auto;
    display: flex;
    padding: 0 1rem;
    .a-heading {
      flex: 0 1 100%;
      vertical-align: middle;
      align-self: center;
      text-align: left;
    }
  }
}
</style>
