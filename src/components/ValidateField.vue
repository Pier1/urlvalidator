<template>
  <div>
    <div class="m-validateField o-flexRow" id="validateField">
      <label v-if="true" for="validateField" class="o-validateField--label m-flexRowItem --label">Enter URL to validate, otherwise fill fields below to build URL.</label>
      <div class="m-flexRowItem">
        <input name="validateField" class="o-validateField--input" placeholder="https://www.exampe.com/example" v-model="url.href" @input="updateModel" v-on:keyup.enter="validateUrl" />

      </div>
      <div class="m-flexRowItem">
        <button class="o-validateField--button" @click="validateUrl">Validate</button>
      </div>
    </div>
    <div class="m-validInfo o-flexRow">
      <div class="m-flexRowItem --label"></div>
      <ul class="m-flexRowItem --grow o-validFlags" v-if="showFlags">
        <li v-for="(text, key) in validFlagText" v-if="text && !validFlags[key]" v-html="text"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import configuration from '../configuration';
import {
  validateCharacters,
  validateProtocol,
  validateHost,
  validatePath
} from '../helpers';

export default {
  name: 'ValidateField',
  props: ['url'],
  data() {
    return {
      validFlagText: configuration.validationText,
      showFlags: false,
      validFlags: {
        validChars: true,
        protocol: true,
        host: true,
        path: true
      }
    };
  },
  methods: {
    updateModel($event) {
      this.$emit('update', $event.target.value);
    },
    validateUrl() {
      this.showFlags = false;
      this.validFlags.validChars = validateCharacters(this.url.host);
      if (this.validFlags.validChars) {
        this.validFlags.protocol = validateProtocol(this.url.href);
        this.validFlags.host = validateHost(this.url.host);
        this.validFlags.path = validatePath(this.url.path);
        Object.keys(this.validFlags).forEach(key => {
          if (!this.validFlags[key]) {
            this.showFlags = true;
          }
        });
      } else {
        this.showFlags = true;
      }
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
.m-validInfo {
  .o-validFlags {
    margin: 1rem;
    padding-left: 1.5rem;
    background-color: rgba(255, 234, 32, 0.4);
  }
}
</style>
