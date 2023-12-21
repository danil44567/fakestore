<template>
  <nav class="header">
    <a href="/"><h1>Tamedbeast</h1></a>
    <a href="/" class="shoping-cart">
      <img src="@\assets\cart_nxs4fyq12xid.svg" alt="" />
      <p>Корзина</p>
    </a>
  </nav>

  <router-view />

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
  font-size: 18px;
  border-radius: 10px;
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
</style>
