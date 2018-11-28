<template>
  <nav>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <router-link class="btn btn-mod btn-border"  v-bind:to="item.path">
      {{ item.title }}
      </router-link>
    </li>
  </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'skill', path: '/skill' },
        { title: 'output', path: '/output' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
display:flex;
width: 480px;
padding: 0;
margin: 0 auto 20px;
list-style: none;
  @media only screen and (max-width: 480px){
    width: 100%;
  }
}

li{
  width: calc(480px / 4 - 6px);
  margin: 0 3px;
  @media only screen and (max-width: 480px){
    width: calc(100% / 4 - 6px);
  }
}

.btn-mod{
display: inline-block;
width: 100%;
box-sizing: border-box;
padding: 12px 0;
font-size: 1.4rem;
text-align: center;
color: #fff;
background: rgba(34,34,34, .9);
border: 2px solid transparent;
font-weight: 400;
text-transform: uppercase;
text-decoration: none;
letter-spacing: 2px;
transition: all 0.2s cubic-bezier(0.000, 0.000, 0.580, 1.000);
  &:hover,
  &:focus{
  font-weight: 400;
  color: rgba(255,255,255, .85);
  background: rgba(0,0,0, .7);
  text-decoration: none;
  outline: none;
  }
  @media only screen and (max-width: 480px){
    font-size: 1.2rem;
  }
}

.btn-mod:active{cursor: pointer !important;}

.btn-mod.btn-border{
color: #151515;
border: 2px solid #151515;
background: transparent;
  &:hover,
  &:focus{
  color: #fff;
  border-color: transparent;
  background: #000;
  }
}

.router-link-exact-active{
color: #fff !important;
background: #000 !important;
}
</style>
