<template>
  <section class="pages">
    <nav>
      <ul>
        <li>
          <a href="#linkA">linkA</a>
        </li>
        <li>
          <a href="#linkB">linkB</a>
        </li>
        <li>
          <a href="#linkC">linkC</a>
        </li>
      </ul>
    </nav>

    <!-- <div id="linkA" class="content" v-for="i in 3" v-bind:key="i">
      <h3> {{ name }} </h3>
      <p> {{ text }} </p>
    </div> -->
  </section>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      name: 'ここにタイトル',
      text: 'あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。'.repeat(2)
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
  margin: 10px;
  width: 30%;
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
