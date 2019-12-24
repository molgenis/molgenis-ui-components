<template>
  <div id="app">
    <div id="header" class="shadow-sm bg-primary text-white p-0">
      <h1 class="m-0 px-3 py-2">Molgenis UI Component Library</h1>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 menu-col">
          <router-link class="btn btn-secondary" to="/">
            Home
            <i class="fas fa-caret-right"></i>
          </router-link>
          <router-link class="btn btn-secondary" to="/toast">
            Toast component
            <i class="fas fa-caret-right"></i>
          </router-link>
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
  height: 4rem;

  h1 {
    background-color: rgba(0, 0, 0, 0.15);
  }
}

.menu-col {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top-right-radius: 0.25rem;
  border-top: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  height: calc(100vh - 5rem);
  width: 4rem;
  text-align: center;

  a {
    width: 100%;
    margin-bottom: 1rem;
    text-align: left;
    .fas {
      float: right;
      font-size: 1.5rem;
      visibility: hidden;
    }
  }

  .router-link-exact-active {
    .fas {
      visibility: visible;
    }
  }
}
</style>
