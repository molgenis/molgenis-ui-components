<template>
  <div id="app">
    <h1>Molgenis ui components</h1>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2"></div>
        <div class="col">
          <div class="card">
            <div class="card-header">ToastComponent</div>
            <div class="card-body">
              <h5 class="card-title">Usage</h5>
              <div class="card-text">
                <pre><code>
&lt;toast-component
  v-show="showOrHideBoolean"
  message="This is a toast"
  type="info"
  :autoHideOnType="['info', 'succes']"
  :autoHideTime="5000"
  @toastCloseBtnClicked="isAutoHideToastShown = false"
&gt;&lt;/toast-component&gt;
            </code></pre>
                <p>
                  message: Text to show
                  <br />type: bootstrap 4 type
                  <br />autoHideOnType: Hide the toast automatically if selected type is in array
                  <br />autoHideTime: Auto hide time in msec, defaults to 10 seconds
                  <br />toastCloseBtnClicked: close event handler
                </p>
              </div>
            </div>
           <toast-component v-model="messages" :fixed="fixed"></toast-component>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">Demo</div>
            <div class="card-body">
              <div class="card-text">
                <div class="d-flex justify-content-between flex-wrap">
                  <button
                    type="button"
                    class="btn btn-success mb-3"
                    @click="singleToast"
                  >Single Toast</button>
                  <button
                    type="button"
                    class="btn btn-secondary mb-3"
                    @click="headlessToast"
                  >Headless Toast</button>
                  <button type="button" class="btn btn-info mb-3" @click="timedToast">Timed Toast</button>
                  <button type="button" class="btn btn-warning mb-3" @click="multiToast">Multi Toast</button>
                  <button
                    type="button"
                    class="btn btn-primary mb-3"
                    @click="inlineToast"
                  >Inline Toast</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'app',
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
          type: 'secondary',
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
          type: 'danger',
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

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 2rem 1rem;
}
</style>
