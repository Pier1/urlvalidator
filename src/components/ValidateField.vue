<template>
  <div>
    <div id="validation">
      <input name="validateField" class="validation-input" placeholder="https://www.example.com/example" v-model="url.href" @input="updateModel" v-on:keyup.enter="validateUrl" />
    </div>
    <div class="action-buttons">
      <button class="button-default validate-button" @click="validateUrl">Validate</button>
      <span class="separator">or</span>
      <button class="button-default" @click="showForm()">Create new Url</button>
    </div>
    <div class="flag-container">
      <ul v-if="showFlags">
        <li v-for="(text, key) in validFlagText" v-if="text && !validFlags[key]" v-html="text"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import configuration from '../configuration';
import { validateCharacters, validateProtocol, validateHost, validatePath } from '../helpers';

export default {
  name: 'ValidateField',
  props: ['url'],
  data() {
    return {
      validFlagText: configuration.validationText,
      showFlags: false,
      previewUrl: false,
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
        if (!this.showFlags) {
          // show validation success message
          this.showForm();
        }
      } else {
        this.showFlags = true;
      }
    },
    showForm() {
      this.showFlags = false;
      this.$emit('update', 'showForm');
    }
  }
};
</script>

<style lang="scss">
#validation {
  text-align: center;
  font-size: 1.2rem;
}
.validation-input {
  width: 100%;
  text-align: center;
  font: inherit;
  min-height: 3rem;
}
.action-buttons {
  text-align: center;
  margin: 1.25rem 0;
}

.action-buttons .validate-button {
  font-size: 1.35rem;
  background: #1592da;
  color: #fefdfd;
  min-width: 10rem;
}

.action-buttons .separator {
  margin: 0 1rem;
  font-weight: 600;
}

.flag-container {
  margin: 0.5rem 0 0;
}

.flag-container ul {
  list-style: none;
  margin: 0;
}

.flag-container ul li {
  padding: 0.5rem;
  border: 1px solid;
  border-radius: 2px;
  border-color: #ec707e;
  color: #aa1627;
  width: 90%;
  margin: 0.25rem auto;
  text-align: center;
}
</style>
