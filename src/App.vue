<template>
  <div id="app">
    <router-view />
    <MainNavigation />
    <LandingPage />
    <MainFooter />

  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
import MainNavigation from './components/MainNavigation.vue'
import MainFooter from './components/MainFooter.vue'
export default {
  name: 'App',
  components: {
    MainNavigation, LandingPage, MainFooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
