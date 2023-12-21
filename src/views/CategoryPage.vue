<template>
  <h2 class="fs-2">{{ name }}</h2>
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
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "CategoryPage",
  props: ["name"],

  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.updateProducts(this.name);
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        this.updateProducts(toParams.name);
      }
    );
  },
  methods: {
    updateProducts(param) {
      fetch(`https://fakestoreapi.com/products/category/${param}?limit=10`)
        .then((res) => res.json())
        .then((json) => (this.products = json));
    },
  },
};
</script>

<style>
h2::first-letter {
  text-transform: uppercase;
}
</style>