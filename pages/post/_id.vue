<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}</small
        >
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img
          src="https://img1.goodfon.ru/original/1920x1408/2/39/praga-chehiya-charles-bridge.jpg"
          alt="post image"
        />
      </div>
    </header>
    <main class="post-content">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        saepe, minus a similique molestiae sit rem ad nobis alias dolorum.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        saepe, minus a similique molestiae sit rem ad nobis alias dolorum.
      </p>
    </main>
    <footer>
      <app-comment-form @created="createCommentHandler" v-if="canAddComment" />
      <div class="comments" v-if="true">
        <app-comment v-for="comment in 4" :key="comment" :comment="comment" />
      </div>
      <div v-else class="text-center">Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
import AppComment from "@/components/main/Comment";
import AppCommentForm from "@/components/main/CommentForm";
export default {
  components: {
    AppComment,
    AppCommentForm
  },
  data() {
    return {
      canAddComment: true
    };
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  methods: {
    createCommentHandler() {
      this.canAddComment = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
  .post-header {
    margin-bottom: 1.5rem;
    .post-title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      align-items: center;
      h1 {
      }
    }
    .post-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      align-items: center;
    }
    .post-image {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .post-content {
    margin-bottom: 2rem;
  }
}
</style>
