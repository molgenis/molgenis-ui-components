<template>
  <div id="app">
    <div id="header" class="shadow-sm bg-secondary text-white">
      <h1 class="m-0 px-3 py-2">Molgenis UI Component Library</h1>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 menu-col shadow-sm">
          <router-link class="btn btn-info" to="/toast">Toast component</router-link>
        </div>
        <div class="col m-0 p-0">
          <div class="mt-3">
            <router-view></router-view>
          </div>
        </div>
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
}

#header {
  height: 3.75rem;
}

.menu-col {
  margin-top:0.9375rem;
  border-top-right-radius: 0.25rem;;
  height: calc(100vh - 4.6875rem);
  width: 4rem;
}
</style>
