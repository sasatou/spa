<template>
  <div id="app">
    <AppHeader></AppHeader>
    <MainNav></MainNav>
    <div class="main">
      <router-view></router-view>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
// import 'normalize.css'
import AppHeader from './components/AppHeader'
import MainNav from './components/MainNav'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    AppHeader,
    MainNav,
    AppFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 80px;
  @media only screen and (max-width: 480px){
    margin: 40px 3px 0;
  }
  .main{
    padding: 0 10px;
  }
}

</style>
