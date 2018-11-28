<template>
  <section class="pages">
    <div class="content" v-for="i in 1" v-bind:key="i">
    <div class="text-area">
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'タイトル',
      text: 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。'.repeat(10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content {
  background-color: #eee;
  display: inline-block;
  width: calc(100% - 20px);
  padding: 20px 0;
  margin: 0 10px;
  @media only screen and (max-width: 375px){
    width: calc(100% - 6px);
    margin: 0 3px;
  }
}

.text-area{
    text-align: center;
  p {
    width: 360px;
    margin: 0 auto;
    line-height: 2.2;
    text-align: left;
    @media only screen and (max-width: 375px){
      width: calc(100% - 20px);
      margin: 0 10px;
    }
  }
}

.fade-enter-active {
  transition: all .5s 0s ease-out;
}
.fade-enter {
  opacity: 0;
  margin-top: -20px;
}
</style>
