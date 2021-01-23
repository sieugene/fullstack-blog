<template>
  <el-card class="comment">
    <div class="comment-header">
      <span class="name">{{ comment.name }}</span>
      <span>
        <i class="el-icon-time"></i>
        {{ comment.date | date('time') }}
      </span>
    </div>
    <div class="comment-text">
      {{ comment.text }}
    </div>
  </el-card>
</template>
<script>
export default {
  props: ["comment"]
};
</script>
<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
  .comment-header {
    justify-content: space-between;
    margin-bottom: 0.5rem;
    display: flex;
    font-size: 0.8rem;
  }
  .comment-text {
    white-space: pre-line;
  }
}
</style>
