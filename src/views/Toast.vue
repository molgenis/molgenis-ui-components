<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="card shadow-sm">
          <div class="card-header bg-light text-black">
            <h4 class="mb-0">ToastComponent</h4>
          </div>
          <div class="card-body">
            <h5 class="card-title">Usage</h5>
            <div class="card-text">
              <pre><code>
&lt;toast-component v-model="messages" :fixed="true"&gt;&lt;/toast-component&gt;
          </code></pre>
              <ul>
                <li>
                  <b>messages:</b> Array of messages to show
                </li>
                <li>
                  <b>fixed:</b>set to false to display inline
                  <i>default: true (optional)</i>
                </li>
              </ul>
              <h5>Message object:</h5>
              <pre><code class="javascript">
  {
    type: 'danger',
    textType: 'light',
    title: 'Fixed toast',
    message: "I'm a fixed toast"
  }
          </code></pre>
              <ul>
                <li>
                  <b>type:</b> Any Bootstrap type (e.g. success / info, secondary etc)
                  <i>default: light (optional)</i>
                </li>
                <li>
                  <b>textType:</b> Any Bootstrap text type (light, dark, white, black, primary etc.)
                  <i>default: dark (optional)</i>
                </li>
                <li>
                  <b>title:</b> Array of messages to show
                  <i>(optional)</i>
                </li>
                <li>
                  <b>message:</b> (optional) set to false to display inline
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col pl-0">
        <div class="card shadow-sm mb-3">
          <div class="card-header bg-light text-dark">
            <h4 class="mb-0">Demo</h4>
          </div>
          <div class="card-body">
            <div class="card-text">
              <div class="d-flex flex-wrap">
                <button
                  type="button"
                  class="btn btn-success mb-3 mr-3"
                  @click="singleToast"
                >Single Toast</button>
                <button
                  type="button"
                  class="btn btn-danger mb-3 mr-3"
                  @click="headlessToast"
                >Headless Toast</button>
                <button type="button" class="btn btn-info mb-3 mr-3" @click="timedToast">Timed Toast</button>
                <button
                  type="button"
                  class="btn btn-warning mb-3 mr-3"
                  @click="multiToast"
                >Multi Toast</button>
                <button
                  type="button"
                  class="btn btn-secondary mb-3 mr-3"
                  @click="inlineToast"
                >Inline Toast</button>
              </div>
            </div>
          </div>
        </div>
        <toast-component v-model="messages" :fixed="fixed"></toast-component>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ToastDemoView',
  data: () => {
    return {
      messages: [],
      fixed: true
    }
  },
  methods: {
    singleToast () {
      this.fixed = true
      this.messages = [
        {
          type: 'success',
          textType: 'light',
          title: 'Success',
          message: "I'm a success message"
        }
      ]
    },
    headlessToast () {
      this.fixed = true
      this.messages = [
        {
          type: 'danger',
          textType: 'light',
          message: "I'm a headless message"
        }
      ]
    },
    timedToast () {
      this.fixed = true
      this.messages = [
        {
          type: 'info',
          textType: 'light',
          title: 'Timed',
          message: "I'm an info message with timer",
          timeout: 2000
        }
      ]
    },
    multiToast () {
      this.fixed = true
      this.messages = [
        {
          type: 'warning',
          textType: 'light',
          title: 'Warning!',
          message: "I'm a warning message"
        },
        {
          type: 'secondary',
          textType: 'light',
          title: 'Secondary!',
          message: "I'm a secondary toast"
        }
      ]
    },
    inlineToast () {
      this.messages = [
        {
          type: 'secondary',
          textType: 'light',
          title: 'Fixed toast',
          message: "I'm a fixed toast"
        }
      ]
      this.fixed = false
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
