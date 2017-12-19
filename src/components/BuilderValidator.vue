<template>
  <div class="m-builderValidator" id="builderValidator">
    <ValidateField :url="url" :withForm="withForm" :formValid="formValid" @update="splitUrlToObj" />
    <transition name="reveal">
      <Form :url="url" @update="consumeUrlObj" v-if="withForm" />
    </transition>
  </div>
</template>

<script>
import ValidateField from './ValidateField';
import Form from './Form';
import regex from '../regex';
import { splitParams, combineParams } from '../helpers';

export default {
  name: 'BuilderValidator',
  components: {
    ValidateField,
    Form
  },
  data() {
    return {
      withForm: false,
      formValid: true,
      url: {
        href: '',
        https: true,
        host: '',
        path: '',
        params: [],
        hash: []
      }
    };
  },
  methods: {
    splitUrlToObj(str) {
      if (str === 'showForm') {
        this.formValid = true;
        this.withForm = true;
      } else {
        const anchor = document.createElement('a');
        anchor.href = decodeURIComponent(str);

        this.url.href = str;
        this.url.https = !!anchor.protocol.match(regex.https);
        this.url.host = anchor.hostname;
        this.url.path = anchor.pathname;
        this.url.params = splitParams('?', anchor.search);
        this.url.hash = splitParams('#', anchor.hash);
      }
    },
    consumeUrlObj(obj) {
      this.formValid = false;
      this.url.href =
        (obj.https ? 'https://' : 'http://') +
        obj.host +
        obj.path +
        combineParams('?', obj.params) +
        combineParams('#', obj.hash);
    },
    showForm() {
      this.withForm = true;
    }
  }
};
</script>

<style lang="scss">
.reveal-enter-active,
.reveal-leave-active {
  transition: opacity 0.5s;
}
.reveal-enter,
.reveal-leave-to {
  opacity: 0;
}

.m-builderValidator {
  max-width: $max-container-width;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 0 2px rgba(0, 0, 0, 0.25);
  margin: 2rem auto;
  padding: 1rem;
}
</style>
