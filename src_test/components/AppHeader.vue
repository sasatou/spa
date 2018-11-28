<template>
  <header class="header app_header">
    <img v-bind="item">
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      item: {
        id: 1,
        src: require('../assets/iam.jpeg'),
        alt: "I'am"
      },
      msg: 'vue.jsを勉強するサイト'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.app_header{
  text-align: center;
  h1{
    font-size: 1.6rem;
    margin-bottom: 20px;
  }
  img{
    width: 200px;
    vertical-align: bottom;
    margin-bottom: 20px;
  }
}
</style>
