<template>
<div id="app">
  <h1>Molgenis ui components</h1>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2"> <router-link to="/toast">Toast component</router-link></div>
      <div class="col"><router-view></router-view></div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'app'

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
