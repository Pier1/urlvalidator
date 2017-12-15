<template>
  <div id="app">
    <Header />
    <BuilderValidator />
  </div>
</template>

<script>
import Header from './components/Header';
import BuilderValidator from './components/BuilderValidator';

export default {
  name: 'app',
  components: {
    Header,
    BuilderValidator
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin-top: 0;
}

body {
  background-color: #f2f1f1;
}

.o-flexRow {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  .m-flexRowItem {
    padding: 0.5rem;
    flex: 0 0 25%;
    &.--label {
      flex: 0 0 20%;
    }
  }
}

.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}
</style>
