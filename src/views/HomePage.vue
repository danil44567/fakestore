<template>
  <div class="products row">
    <ProductCard
      class="col-lg-3 col-sm-4 col-6"
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :description="product.description"
      :image="product.image"
      :price="product.price"
      :rate="product.rating.rate"
    />
  </div>

  <AppPagination />
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import AppPagination from "@/components/AppPagination.vue";

export default {
  name: "HomePage",
  components: {
    ProductCard,
    AppPagination,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => (this.products = json));
  },
};
</script>
 
<style>
.toast-header img {
  filter: invert(100%);
  width: 20px;
  height: 20px;
}

* {
  margin: 0;
}
</style>