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

export default {
  name: 'App',
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
#app {
  width: 100%;
}
</style>
