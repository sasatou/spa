<template>
  <section class="pages">
    <div class="content" v-for="i in 1" v-bind:key="i">
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: 'ナビゲーション2',
      text: 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。'.repeat(10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pages {
  text-align: center;
}

.content {
  background-color: #eee;
  display: inline-block;
  width: calc(100% - 20px);
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
