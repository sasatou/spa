<template>
  <footer class="footer app_footer">
    <small class="copyright">{{ msg }}</small>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      msg: '© sasatou. All Rights Reserved.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app_footer{
  text-align: center;
  margin-top: 20px;
}
</style>
