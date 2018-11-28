<template>
  <section class="pages">
    <div class="com-card">
    <div class="com-card__items">
      <div class="com-card__item" v-for="i in 6" v-bind:key="i">
      <a class="com-card__link" href="#">
      <span class="com-card__icon"></span>
      <span class="com-card__text"> {{ text }} </span>
      </a>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      text: 'ラベルラベル'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.com-card {
  box-sizing: border-box;
  width: 618px;
  margin: 0 auto;
  @media only screen and (max-width: 480px){
    width: 100%;
  }
}

.com-card__items {
  display: flex;
  flex-wrap: wrap;
}
.com-card__item {
  flex: 1 0 auto;
  display: flex;
  width: calc(100% / 3 - 6px);
  height: 200px;
  margin:0 3px;
  margin-bottom: 10px;
  @media only screen and (max-width: 480px){
    flex: 1 0 auto;
    width: calc(100% / 2 - 6px);
    height: 200px;
  }
  // @media only screen and (max-width: 480px){
  //   flex: 1 0 auto;
  //   width: calc(100% - 6px);
  //   height: 200px;
  // }
}

.com-card__link{
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #d88388;
  border-radius: 4px;
  transition: all 0.3s;
  text-decoration: none;
  color: #fff;
  &:focus,
  &:hover {
    text-decoration: none;
    background-color: #c7797d;
    transition: all 0;
  }
  // @media only screen and (max-width: 1024px){
  //     flex: 1 1 auto;
  // }
}

.com-card__icon {
  display: block;
  flex: 0 0 auto;
  margin-top: 20px;
  line-height: 1;
  font-size: 120px;
  height: 120px;
}
.com-card__icon:before{
    content: '';
    display: inline-block;
    background-image: url(../assets/icon3.svg);
    background-repeat: no-repeat;
    position: relative;
    width: 1em;
    height: 1em;
}

.com-card__text {
  display: block;
  margin-top: 10px;
  text-align: center;
}
.com-card__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.fade-enter-active {
  transition: all .5s 0s ease-out;
}
.fade-enter {
  opacity: 0;
  margin-top: -20px;
}

</style>
