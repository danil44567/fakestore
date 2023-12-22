<template class="asd">
  <div class="d-flex flex-column min-vh-100">
    <AppHeader />
    <main class="container mb-5">
      <router-view />
      <OffCanvas />
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <LiveToast toast="liveToast" text="Товар добавлен в корзину" />
        <LiveToast toast="liveToastErr" text="Такой товар уже есть в корзине" />
      </div>
    </main>
    <nav class="footer mt-auto d-flex justify-content-center">
      ©️ Tamedbeast
    </nav>
  </div>
</template>

<script>
import OffCanvas from "./components/OffCanvas.vue";
import AppHeader from "./components/AppHeader.vue";
import LiveToast from "./components/LiveToast.vue";

export default {
  components: {
    OffCanvas,
    AppHeader,
    LiveToast,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.footer {
  margin-top: 60px;
}

.price {
  display: flex;
  gap: 15px;
  padding-bottom: 10px;
}

.price-real {
  font-size: 18px;
}

.price-fake {
  font-size: 14px;
  color: gray;
  text-decoration: line-through;
}

button {
  background-color: #10cc6f;
  border: none;
  padding: 5px 15px;
  font-size: 18px !important;
  border-radius: 10px !important;
  transition: all 0.1s;
}

button:hover {
  background-color: #0da659;
  scale: 1.02;
}

button:active{
  background-color: rgb(11, 194, 102);
  scale: 1;
}

.non-selectable {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
