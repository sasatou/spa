<template>
  <div id="app">
    <AppHeader></AppHeader>
    <MainNav></MainNav>
    <div class="main">
      <transition name="fade">
      <router-view></router-view>
      </transition>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import 'normalize.css'
import AppHeader from './components/AppHeader'
import MainNav from './components/MainNav'
import AppFooter from './components/AppFooter'


export default {
  name: 'app',
  components: {
    AppHeader,
    MainNav,
    AppFooter
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {color: #42b983;}

.post{
  p{line-height: 2.2;}
  img{width: 100%;}
}
</style>
