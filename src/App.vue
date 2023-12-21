<template>
  <nav class="header">
    <a href="/"><h1>Tamedbeast</h1></a>
    <div class="nav-right">
      <button
        class="nav-icon"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
      >
        <img src="@\assets\category-svgrepo-com (1).svg" alt="" />
        <p>Категории</p>
      </button>

      <a href="/" class="nav-icon">
        <img src="@\assets\cart_nxs4fyq12xid.svg" alt="" />
        <p>Корзина</p>
      </a>
    </div>
  </nav>
  <main class="container">
    <router-view />
    <OffCanvas />
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div
        id="liveToast"
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-delay="1000"
      >
        <div class="toast-header">
          <img
            src="@\assets\cart_nxs4fyq12xid.svg"
            class="rounded me-2"
            alt=""
          />
          <strong class="me-auto">Корзина</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">Товар добавлен в корзину</div>
      </div>
    </div>
  </main>
  <nav class="footer"></nav>
</template>

<script>
import OffCanvas from "./components/OffCanvas.vue";

export default {
  components: {
    OffCanvas,
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

.header {
  margin-bottom: 30px;
}

.footer {
  margin-top: 60px;
}

.nav-right {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

nav {
  background: linear-gradient(to right, #11cb31 0, #09721b 100%) no-repeat;
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav h1 {
  text-transform: uppercase;
  font-size: 36px;
  color: #fff;
  margin: 0;
}

nav p {
  margin: 0;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

button {
  background-color: #10cc6f;
  border: none;
  padding: 5px 15px;
  font-size: 18px !important;
  border-radius: 10px !important;
  transition: scale 0.1s;
}

button:hover {
  background-color: #0da659;
  scale: 1.02;
}

.nav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: none !important;
  transition: scale 0.1s;
}

.nav-icon:hover {
  scale: 1.02;
}

.nav-icon p {
  color: #fff;
}

.nav-icon img {
  width: 40px;
  height: 40px;
  color: #fff;
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
</style>
