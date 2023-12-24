<template>
  <div
    class="non-selectable position-absolute top-50 start-50 translate-middle"
  >
    <div v-if="isError == false" class="d-flex flex-column align-items-center">
      <div class="spinner-border" role="status"></div>
      <p class="fs-3">Загрузка...</p>
    </div>
    <div v-else>
      <p class="fs-3">
      Ошибка: сервер временно не доступен
    </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isError"]
};
</script>

<style scoped>
</style>