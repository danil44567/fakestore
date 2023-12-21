<template>
  <div class="products">
    <ProductCard
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
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "HomePage",
  components: {
    ProductCard,
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
.products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

* {
  margin: 0;
}
</style>