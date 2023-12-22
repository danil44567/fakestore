<template>
  <h1>Корзина</h1>
  <LoadingSpinner v-if="isLoading" />
  <p v-if="products.length == 0 && isLoading == false">Корзина пуста...</p>
  <ProductCardInCart
    v-for="product in products"
    :key="product.id"
    :title="product.title"
  >
  </ProductCardInCart>
</template>

<script>
import ProductCardInCart from "@/components/ProductCardInCart.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  data() {
    return {
      products: [],
      isLoading: true,
    };
  },
  mounted() {
    let local = localStorage.getItem("cart");
    if (local != undefined) {
      console.log(local)
      local = JSON.parse(local);
      let promises = [];
      local.forEach((element) => {
        promises.push(fetch("https://fakestoreapi.com/products/" + element));
      });
      Promise.all(promises)
        .then((responses) => {
          responses.forEach((element) => {
            element.json().then((json) => this.products.push(json));
          });
        })
        .then(() => (this.isLoading = false));
    } else {
      this.isLoading = false;
    }
  },
  components: {
    ProductCardInCart,
    LoadingSpinner,
  },
};
</script>

<style>
</style>