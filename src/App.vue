<template>
  <nav class="header">
    <a href="/"><h1>Tamedbeast</h1></a>
    <a href="/" class="shoping-cart">
      <img src="@\assets\cart_nxs4fyq12xid.svg" alt="" />
      <p>Корзина</p>
    </a>
  </nav>
  <main class="container">
    <router-view />
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

nav {
  background: linear-gradient(to right, #11cb31 0, #09721b 100%) no-repeat;
  padding: 10px;
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

.shoping-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.shoping-cart p {
  color: #fff;
}

.shoping-cart img {
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
