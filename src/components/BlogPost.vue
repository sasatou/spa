<template>
  <section class="pages" id="blog-post">
    <div class="blog-post__inner">
      <h1>{{ post.data.title }}</h1>
      <h4>{{ post.data.author.first_name }}</h4>
      <div class="post" v-html="post.data.body"></div>
       <router-link
        v-if="post.meta.previous_post"
        :to="post.meta.previous_post.slug"
        class="button-previous"
      >
        {{ post.meta.previous_post.title }}
      </router-link>
      <router-link
        v-if="post.meta.next_post"
        :to="post.meta.next_post.slug"
        class="button-next"
      >
        {{ post.meta.next_post.title }}
      </router-link>
    </div>
  </section>
</template>
 <script>
import butter from './../buttercms';
 export default {
  name: 'blog-post',
  data() {
    return {
      post: {},
    };
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data;
        }).catch((res) => {
          console.log(res);
        });
    },
  },
  watch: {
    $route() {
      this.getPost();
    },
  },
  created() {
    this.getPost();
  },
};
</script>

<style lang="scss" scoped>
.blog-post__inner {
width: 618px;
margin: 0 auto;
  @media only screen and (max-width: 480px){
    width: 100%;
  }
}

h4{
  color: red;
}

.fade-enter-active {
  transition: all .5s 0s ease-out;
}
.fade-enter {
  opacity: 0;
  margin-top: -20px;
}
</style>
