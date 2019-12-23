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
              v-model="messages"
            ></toast-component>
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

<script>
import Vue from 'vue'
// import { ToastComponent } from './components/'

export default Vue.extend({
  name: 'app',
  data: () => {
    return {
      messages: [
        { type: 'success', textType: 'light', title: 'Success', message: 'De wereld is helemaal mooi man', timeout: 2000 },
        { title: 'Info', message: 'hello world', timeout: 2000 },
        { type: 'danger', textType: 'light', title: 'Danger', message: 'Alles is helemaal kapot man' }
      ]
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
