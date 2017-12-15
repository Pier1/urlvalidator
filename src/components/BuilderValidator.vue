<template>
  <div class="m-builderValidator" id="builderValidator">
    <ValidateField :url="url" @update="splitUrlToObj" />
    <Form />
  </div>
</template>

<script>
import ValidateField from './ValidateField';
import Form from './Form';
import regex from '../regex';
import { splitParams } from '../helpers';

export default {
  name: 'BuilderValidator',
  components: {
    ValidateField,
    Form
  },
  data() {
    return {
      url: {
        href: '',
        https: null,
        host: '',
        path: '',
        params: [],
        hash: []
      }
    };
  },
  methods: {
    splitUrlToObj(str) {
      const anchor = document.createElement('a');
      anchor.href = decodeURIComponent(str);

      this.url.href = str;
      this.url.https = !!anchor.protocol.match(regex.https);
      this.url.host = anchor.hostname;
      this.url.path = anchor.pathname;
      this.url.params = splitParams('?', anchor.search);
      this.url.hash = splitParams('#', anchor.hash);
    }
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
