<template>
  <div id="app">
    <MainNavigation />
    <router-view />
    <MainFooter />
    

  </div>
</template>

<script>
import MainNavigation from './components/MainNavigation.vue'
import MainFooter from './components/MainFooter.vue'
import { store } from './store/global';

export default {
  name: 'App',
  created() {
    store.fetchProducts();
  },
  components: {
    MainNavigation, MainFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  min-width: fit-content;
}
</style>
