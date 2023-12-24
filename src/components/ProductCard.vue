<template>
  <router-link
    class="product"
    :to="{ name: 'product', params: { id: this.id } }"
  >
    <div class="product__main">
      <img class="product__img" :src="image" :alt="title" />
      <div class="product__info">
        <div class="product__info-body">
          <div class="price">
            <p class="price-real">{{ price }}$</p>
            <p class="price-fake">{{ price * 2 }}$</p>
          </div>

          <p class="product__title">{{ title }}</p>
          <div class="product__rate">
            <img src="@\assets\star_9jfrkmkc6jof.svg" alt="" />
            <p>{{ rate }}</p>
          </div>
        </div>
        <p class="product__delivery"><span>Доставка</span> когда-нибудь</p>

        <AddCartButton
          class="product__in-cart"
          :product="id"
          @cartUpdate="cartUpdate"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
import AddCartButton from "./AddCartButton.vue";

export default {
  name: "ProductCard",
  props: ["id", "title", "description", "image", "price", "rate"],
  emits: ["cartUpdate"],
  components: {
    AddCartButton,
  },
  methods: {
    cartUpdate(cart) {
      this.$emit("cartUpdate", cart);
    },
  },
};
</script>

<style>
.product {
  text-decoration: none;
  color: inherit;
}

.product__main {
  border-radius: 10px;
}

.product:hover .product__main {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.442);
}

.product:hover {
  position: relative;
}

.product:hover .product__in-cart {
  display: block;
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

.product__info-body{
  padding: inherit;
  display: flex;
  flex-direction: inherit;
  gap: inherit;
  align-items: stretch;
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

.product p {
  margin: 0;
}

@media (max-width: 992px) {
  .product__in-cart {
    display: block;
  }
}
</style>