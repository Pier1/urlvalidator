<template>
  <div class="m-form" id="form">
    <div class="form-group form-toggle">
      <input type="radio" id="form-https" name="https_switch" @click="toggleHttps(true)" :checked="url.https"/>
      <label for="form-https">HTTPS</label>
      <input type="radio" id="form-http" name="https_switch" @click="toggleHttps(false)" :checked="!url.https"/>
      <label for="form-http">HTTP</label>
    </div>
    <div class="form-group">
      <input type="text" id="form-host" v-model="url.host" @input="sendObj"/>
      <label for="form-host" class=" form-title">
        Base URL
      </label>
    </div>
    <div class="form-group">
      <input type="text" id="form-path" v-model="url.path" @input="sendObj"/>
      <label for="form-path" class="form-title">
        URL Path
      </label>
    </div>
    <div class="form-group">
      <fieldset>
        <legend class="form-title">Query Params</legend>
        <div class="params-row fieldset-row" v-for="(param, index) in url.params">
          <input type="text" v-model="param.key" @input="sendObj">
          <span>=</span>
          <input type="text" v-model="param.value" @input="sendObj">
          <span class="delete-param" @click="deleteParam('params', index, $event)" @keyup.enter="deleteParam('params', index, $event)" tabindex="0">X</span>
        </div>
        <span class="add-param" @click="addParam('params', $event)" @keyup.enter="addParam('params', $event)" tabindex="0">Add New +</span>
      </fieldset>
    </div>
    <div class="form-group">
      <fieldset>
        <legend class="form-title">Hash Params</legend>
        <div class="hash-row fieldset-row" v-for="(param, index) in url.hash">
          <input type="text" v-model="param.key" @input="sendObj">
          <span>=</span>
          <input type="text" v-model="param.value" @input="sendObj">
          <span class="delete-param" @click="deleteParam('hash', index, $event)" @keyup.enter="deleteParam('hash', index, $event)" tabindex="0">X</span>
        </div>
        <span class="add-param" @click="addParam('hash', $event)" @keyup.enter="addParam('hash', $event)" tabindex="0">Add New +</span>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: ['url'],
  methods: {
    addParam(prop, e) {
      const property = this.url[prop];
      if (
        !property.length ||
        (property[property.length - 1].key.length && property[property.length - 1].value.length)
      ) {
        this.url[prop].push({
          key: '',
          value: ''
        });
        this.sendObj();
        this.$nextTick(() => {
          e.target.previousElementSibling.firstElementChild.focus();
        });
      }
    },
    deleteParam(prop, idx, e) {
      this.url[prop].splice(idx, 1);
      this.sendObj();
      e.target.parentElement.parentElement.lastChild.focus();
    },
    toggleHttps(toggle) {
      this.url.https = toggle;
      this.sendObj();
    },
    sendObj() {
      this.$emit('update', this.url);
    }
  }
};
</script>

<style lang="scss" scoped>
#form {
  width: 50%;
  margin: 3rem auto;
}
.form-group {
  display: flex;
  flex-direction: column;
  padding: 0.5em 0 0.625em;
}

.form-group .form-title {
  align-self: flex-start;
  order: -1;
  color: #020001;
  font-size: 1.2em;
}

.form-group input {
  max-width: 400px;
}

.form-group fieldset {
  border: none;
  padding: 0;
}

.form-group fieldset span.add-param {
  display: inline-block;
  margin: 0.45rem 0 0;
  font-size: 0.75em;
  font-weight: 600;
  background: #00b574;
  padding: 0.15rem 0.5rem;
  color: #fefdfd;
  cursor: pointer;
}

.form-group fieldset .fieldset-row {
  clear: both;
  margin: 0.45rem 0 0;
}

.form-group fieldset .fieldset-row .delete-param {
  color: #d51d31;
  display: inline-block;
  font-size: 0.75em;
  font-weight: 800;
  vertical-align: middle;
  padding: 0 0.25rem;
  cursor: pointer;
  text-transform: uppercase;
}

.form-group fieldset .fieldset-row:first-of-type {
  margin: 0;
}

.form-group.form-toggle {
  flex-direction: row;
}

.form-toggle input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;
}

.form-toggle label {
  float: left;
}

.form-toggle label {
  display: inline-block;
  width: 60px;
  background-color: #e5e3e4;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-shadow: none;
  letter-spacing: 0.7px;
  padding: 6px 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease-in-out;
}

.form-toggle label:hover {
  cursor: pointer;
}

.form-toggle input:checked + label {
  background-color: #00b574;
  color: #fefdfd;
}

.form-toggle label:first-of-type {
  border-radius: 4px 0 0 4px;
}

.form-toggle label:last-of-type {
  border-radius: 0 4px 4px 0;
}
</style>
