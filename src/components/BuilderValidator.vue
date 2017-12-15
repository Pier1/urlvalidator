<template>
  <div class="m-builderValidator" id="builderValidator">
    <ValidateField :test="test" @update="splitUrlToObj" />
    <Form :url="url" />
  </div>
</template>

<script>
import ValidateField from './ValidateField';
import Form from './Form';
import regex from '../regex';

export default {
  name: 'BuilderValidator',
  components: {
    ValidateField,
    Form
  },
  data() {
    return {
      test: '',
      url: {
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

      this.url.https = !!anchor.protocol.match(regex.https);
      this.url.host = anchor.hostname;
      this.url.path = anchor.pathname;
      this.url.params = this.splitParams('?', anchor.search);
      this.url.hash = this.splitParams('#', anchor.hash);
    },
    splitParams(deliminator, str) {
      try {
        if (deliminator === '?' || '#') {
          let tempArry = str.replace(deliminator, '').split('&');
          tempArry = tempArry.map(keyValStr => {
            const keyValArr = keyValStr.split('=');
            const obj = {};
            obj[keyValArr[0]] = keyValArr[1];
            return obj;
          });
          return tempArry;
        }
        return null;
      } catch (error) {
        throw new Error(error);
      }
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
