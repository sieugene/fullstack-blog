<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">
        Ошибка 404
      </h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .error-content {
    padding-top: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    .error-title {
      color: rgb(192, 33, 33);
      margin-bottom: 1rem;
    }
  }
}
</style>
