<template>
  <h1>Корзина</h1>
  <p v-if="products.length == 0">Корзина пуста...</p>
  <ProductCardInCart
    v-for="product in products"
    :key="product.id"
    :title="product.title"
  >
  </ProductCardInCart>
</template>

<script>
import ProductCardInCart from "@/components/ProductCardInCart.vue";

export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    let local = localStorage.getItem("cart");
    if (local != undefined) {
      local = JSON.parse(local);
      let promises = [];
      local.forEach((element) => {
        promises.push(fetch("https://fakestoreapi.com/products/" + element));
      });
      Promise.all(promises).then((responses) => {
        responses.forEach((element) => {
          element.json().then((json) => this.products.push(json));
        });
      });
    }
  },
  components: { ProductCardInCart },
};
</script>

<style>
</style>