<template>
  <!-- <article class="post"></article> -->
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>{{ post.title }}</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ post.date | date("date") }}</small
      >
    </header>
    <div class="post-body">
      <img :src="post.imageUrl" alt="post image" class="post-img" />
    </div>
    <footer class="post-footer">
      <el-button round @click="openPost">
        Открыть
      </el-button>
      <span>
        <i class="el-icon-message">{{ post.comments.length }}</i>
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost(id) {
      id = this.post._id;
      this.$router.push(`/post/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .post-body {
    .post-img {
      width: 100%;
      height: auto;
    }
  }
  .post-footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
