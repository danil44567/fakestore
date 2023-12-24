<template>
  <h2 class="fs-2">{{ name }}</h2>
  <LoadingSpinner v-if="products == 0" :isError="isApiError" />
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
      @cartUpdate="cartUpdate"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "CategoryPage",
  props: ["name"],
  emits: ["cartUpdate"],
  components: {
    ProductCard,
    LoadingSpinner,
  },
  data() {
    return {
      products: [],
      isApiError: false,
    };
  },
  mounted() {
    this.updateProducts(this.name);
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams) => {
        this.products = [];
        this.updateProducts(toParams.name);
      }
    );
  },
  methods: {
    updateProducts(param) {
      fetch(`https://fakestoreapi.com/products/category/${param}?limit=10`)
        .then((res) => res.json())
        .then((json) => (this.products = json))
        .catch(() => (this.isApiError = true));
    },
    cartUpdate(cart) {
      this.$emit("cartUpdate", cart);
    },
  },
};
</script>

<style>
h2::first-letter {
  text-transform: uppercase;
}
</style>