<template>
  <div class="m-form" id="form">
    <div class="form-group">
      <input type="checkbox" id="form-https" v-model="urlData.https"/>
      <label for="form-https" >
        Protocol:
      </label>
    </div>
    <div class="form-group">
      <input type="text" id="form-host" v-model="urlData.host"/>
      <label for="form-host">
        Base URL (Hostname)
      </label>
    </div>
    <div class="form-group">
      <input type="text" id="form-path" v-model="urlData.path"/>
      <label for="form-path">
        URL Path
      </label>
    </div>
    <div class="form-group">
      <fieldset>
        <legend>Query Params</legend>
        <span class="add-param" v-on:click="addParam('params')">+</span>
        <div class="params-row" v-for="param in urlData.params">
          <input type="text" v-model="param.key">
          <span>=</span>
          <input type="text" v-model="param.value">
        </div>
      </fieldset>
    </div>
    <div class="form-group">
      <fieldset>
        <legend>Hash Params</legend>
        <span class="add-param" v-on:click="addParam('hash')">+</span>
        <div class="hash-row" v-for="param in urlData.hash">
          <input type="text" v-model="param.key">
          <span>=</span>
          <input type="text" v-model="param.value">
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: ['url'],
  data() {
    return {
      urlData: this.url
    };
  },
  methods: {
    addParam(prop) {
      this.urlData[prop].push({
        key: '',
        value: ''
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-direction: column;
  padding: 0.35em 0 0.625em;
}

.form-group label {
  align-self: flex-start;
  order: -1;
}

.form-group fieldset {
  border: none;
  padding: 0;
}
</style>
