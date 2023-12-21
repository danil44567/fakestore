<template>
  <router-link
    class="product"
    :to="{ name: 'product', params: { id: this.id } }"
  >
    <div class="product__main">
      <img class="product__img" :src="image" :alt="title" />
      <div class="product__info">
        <div class="price">
          <p class="price-real">{{ price }}$</p>
          <p class="price-fake">{{ price * 2 }}$</p>
        </div>

        <p class="product__title">{{ title }}</p>
        <div class="product__rate">
          <img src="@\assets\star_9jfrkmkc6jof.svg" alt="" />
          <p>{{ rate }}</p>
        </div>

        <p class="product__delivery"><span>Доставка</span> когда-нибудь</p>
        <button class="product__in-cart" @click.stop.prevent="addCart">В корзину</button>
      </div>
    </div>
  </router-link>
</template>

<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

export default {
  name: "ProductCard",
  props: ["id", "title", "description", "image", "price", "rate"],
  methods: {
    addCart() {
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    },
  },
};
</script>

<style>
.product {
  /* width: 300px; */
  text-decoration: none;
  color: inherit;
}

.product:hover .product__main {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.442);
}

.product:hover{
  position: relative;
}

.product:hover .product__in-cart {
  display: block;
}

.product__main {
  border-radius: 10px;
  /* box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.442); */
}

.product:hover .product__main {
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 100;
}

.product:hover .product__img {
  padding: 5px;
}

.product:hover .product__title {
  white-space: wrap;
  width: 100%;
}

.product__info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product__title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.product__img {
  object-fit: contain;
  width: 100%;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.3s;
}

.product__rate {
  display: flex;
  gap: 5px;
  align-items: center;
}
.product__rate img {
  width: 20px;
}

.product__delivery span {
  color: gray;
}

.product__in-cart {
  display: none;
}

.product p{
  margin: 0;
}
</style>