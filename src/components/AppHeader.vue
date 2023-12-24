<template>
  <nav class="header sticky-top mb-4">
    <a href="/"><h1 class="text-uppercase">Tamedbeast</h1></a>
    <div class="nav-right">
      <button
        class="nav-icon"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
      >
        <img src="@\assets\category-svgrepo-com (1).svg" alt="" />
        <p>Категории</p>
      </button>
      <router-link to="/cart" class="nav-icon">
        <div class="position-relative d-flex f-row align-items-center">
          <img src="@\assets\cart_nxs4fyq12xid.svg" alt="" />
          <div v-if="cartCount > 0" class="header_cart-count">
            <p>{{ cartCount }}</p>
          </div>
        </div>
        <p>Корзина</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["cartCount"],
};
</script>

<style>
nav {
  background: linear-gradient(to right, #11cb31 0, #09721b 100%) no-repeat;
  padding: 5px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-right {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

nav h1 {
  color: #fff;
  margin: 0;
}

nav p {
  margin: 0;
  /* font-size: 12px; */
}

nav a {
  text-decoration: none;
  color: #2c3e50;
}

.nav-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: none !important;
  transition: scale 0.1s;
  border: none;
}

.nav-icon:hover {
  scale: 1.02;
}

.nav-icon p {
  color: #fff;
}

.nav-icon img {
  width: 20px;
  color: #fff;
}

.header_cart-count {
  position: absolute;
  top: -7px;
  right: -13px;
  background-color: #10cc6f;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header_cart-count p {
  color: black;
  padding: 1.875px 7px;
  font-size: 12px;
}

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .nav-icon img {
    width: 30px;
  }

  nav p {
    margin: 0;
    font-size: 14px;
  }

  .header_cart-count p {
    padding: 3.75px 9px;
    font-size: 12px;
  }

  .header_cart-count {
    top: -5px;
    right: -20px;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .nav-icon img {
    width: 40px;
  }

  nav p {
    margin: 0;
    font-size: 18px;
  }

  nav {
    padding: 5px 30px;
  }

  .header_cart-count p {
    padding: 5px 12px;
    font-size: 16px;
  }
}

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}

/* // XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
}
</style>