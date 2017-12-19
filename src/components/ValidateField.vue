<template>
  <div>
    <div id="validation"  v-bind:class="{ withform: withForm }">
      <input name="validateField" id="validation-input" placeholder="https://www.example.com/example" v-model="url.href" @input="updateModel" @keyup.enter="validateUrl" :tabindex="withForm ? -1 : 0" @click="transferFocus" @focus="transferFocus" @blur="transferFocus"/>
      <div class="validation-actions" v-if="withForm">
        <div class="validated action" @click="copyUrl" @keyup.enter="copyUrl" v-if="validated && formValid" tabindex="0">
          <img src="../assets/check.png" class="action-img" alt="checkmark">
          <span class="action-txt">Copy</span>
        </div>
        <div class="needs-validation action" @click="validateUrl" @keyup.enter="validateUrl" tabindex="0" v-else>
          <img src="../assets/warning.png" class="action-img" alt="checkmark">
          <span class="action-txt">Validate</span>
        </div>
      </div>
    </div>
    <div class="action-buttons" v-if="!withForm">
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
  props: ['url', 'withForm', 'formValid'],
  data() {
    return {
      validFlagText: configuration.validationText,
      showFlags: false,
      validated: false,
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
      this.validated = false;
      this.$emit('update', $event.target.value);
    },
    validateUrl() {
      this.showFlags = false;
      this.validated = false;
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
          this.validated = true;
          this.showForm();
          this.$nextTick(() => {
            this.transferFocus();
          });
        }
      } else {
        this.showFlags = true;
      }
    },
    transferFocus(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.withForm) {
        const actionButton = document.querySelector('.validation-actions div');
        actionButton.focus();
      }
    },
    copyUrl() {
      const target = document.getElementById('validation-input');
      target.focus();
      target.setSelectionRange(0, target.value.length);
      // copy the selection
      document.execCommand('copy');
      const actionTextContainer = document.querySelector('.validated.action .action-txt');
      actionTextContainer.firstChild.nodeValue = 'Copied!';
      this.transferFocus();
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
  font-size: 1.2rem;
  position: relative;
  text-align: center;
  display: flex;
}

#validation.withform {
  text-align: left;
  user-select: none;
}

#validation-input {
  flex: 0 0 100%;
  text-align: center;
  font: inherit;
  min-height: 3rem;
  margin: 0;
  padding: 0 0.5rem;
}

.withform #validation-input {
  flex: 0 1 85%;
  min-width: 0;
  border-color: transparent;
  background-color: #cbc8c8;
}

.validation-actions {
  position: relative;
  background: #fefdfd;
  flex: 1 0 125px;
  display: flex;
}

.validation-actions .action {
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.validation-actions .action.validated {
  border: 2px solid #00b574;
  color: #00b574;
}
.validation-actions .action.needs-validation {
  border: 2px solid #d51d31;
  color: #d51d31;
}

.validation-actions .action .action-img {
  flex: 0 0;
  max-width: 25%;
  padding: 0 0 0 0.75rem;
}

.validation-actions .action .action-txt {
  padding: 0 0.75rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.75em;
  letter-spacing: 0.5px;
  margin-top: 3px;
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
