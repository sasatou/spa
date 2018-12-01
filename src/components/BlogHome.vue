<template>
  <section id="blog-home" class="pages">
    <h1>{{ page_title }}</h1>
    <!-- `v-for` の生成、および Vue 用に `key` 属性の適用。ここでは、slug と index の組みを使用します -->
    <div class="blog-post__inner">
      <div class="blog-post"
        v-for="(post,index) in posts"
        :key="post.slug + '_' + index"
      >
        <router-link :to="'/blog/' + post.slug">
          <article class="media">
            <figure class="blog-post__thumbnail">
              <!-- `:` による結果のバインディング -->
              <!-- `featured_image` を使うかどうかは、`v-if`/`else` で判定します -->
              <img
                v-if="post.featured_image"
                :src="post.featured_image"
                alt=""
              >
              <img
                v-else
                src="http://via.placeholder.com/250x250"
                alt=""
              >
            </figure>
            <h2 class="blog-post__title">{{ post.title }}</h2>
            <!-- <p>{{ post.summary }}</p> -->
          </article>
        </router-link>
      </div>
    </div>
</section>
</template>

<script>
  import { butter } from './../buttercms'
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'New Entry',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then(res => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>

<style lang="scss" scoped>
.pages {
  box-sizing: border-box;
  width: 618px;
  margin: 0 auto;
  @media only screen and (max-width: 480px){
    width: 100%;
  }
}

.blog-post__inner {
  display: flex;
  flex-wrap: wrap;
}
.blog-post {
  display: flex;
  width: calc(100% / 3 - 6px);
  height: 200px;
  margin:0 3px;
  margin-bottom: 10px;
  a{
    text-decoration: none;
    color: #000;
  }
  @media only screen and (max-width: 480px){
    width: calc(100% / 2 - 6px);
    height: 200px;
  }
}
.blog-post__thumbnail{
margin: 0;
  img{
    width: 100%;
  }
}

.blog-post__title{
  margin: 0;
}

.fade-enter-active {
  transition: all .5s 0s ease-out;
}
.fade-enter {
  opacity: 0;
  margin-top: -20px;
}
</style>
