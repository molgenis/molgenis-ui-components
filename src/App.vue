<template>
  <div id="app">
    <h1>Molgenis ui components</h1>
    <div class="card-columns">

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
            <p>message: Text to show<br />
            type: bootstrap 4 type<br />
            autoHideOnType: Hide the toast automatically if selected type is in array<br />
            autoHideTime: Auto hide time in msec, defaults to 10 seconds<br />
            toastCloseBtnClicked: close event handler</p>
          </div>
          <h5 class="card-title">Demo</h5>
          <div class="card-text">
            <button type="button" @click="isToastShown = !isToastShown">Toggle toast</button>
            <toast-component
              v-show="isToastShown"
              class="m-3"
              message="Message from toast"
              type="warning"
              @toastCloseBtnClicked="isToastShown = false"></toast-component>
            <toast-component
              v-show="isAutoHideToastShown"
              class="m-3"
              message="This will hide in about 5 seconds"
              type="info"
              :autoHideOnType="['info', 'succes']"
              :autoHideTime="5000"
              @toastCloseBtnClicked="isAutoHideToastShown = false"></toast-component>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">Stub</div>
        <div class="card-body">
          <h5 class="card-title">Usage</h5>
          <div class="card-text"><pre><code>
&lt;stub&gt;&lt;/stub&gt;
          </code></pre>
            <p>Template to add more cards</p>
          </div>
          <h5 class="card-title">Demo</h5>
          <div class="card-text">
            Hallo world
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToastComponent from './components/ToastComponent.vue'

export default Vue.extend({
  name: 'app',
  components: {
    ToastComponent
  },
  data: () => {
    return {
      isToastShown: true,
      isAutoHideToastShown: true
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
