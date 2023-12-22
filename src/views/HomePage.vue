<template>
  <LoadingSpinner v-if="products.length == 0" />

  <div class="products row">
    <ProductCard
      class="col-lg-3 col-sm-4 col-6"
      v-for="product in products[currentPage]"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :description="product.description"
      :image="product.image"
      :price="product.price"
      :rate="product.rating.rate"
    />
  </div>

  <AppPagination
    :pages="products.length"
    :currentPage="currentPage"
    @changePage="changePage"
    @movePage="movePage"
  />
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import AppPagination from "@/components/AppPagination.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "HomePage",
  components: {
    ProductCard,
    AppPagination,
    LoadingSpinner,
  },
  data() {
    return {
      products: [],
      currentPage: 0,
      // isLoadingError,
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        // this.products = json;
        let size = 10;
        let subarray = [];
        for (let i = 0; i < Math.ceil(json.length / size); i++) {
          subarray[i] = json.slice(i * size, i * size + size);
        }
        this.products = subarray;
      });
  },
  methods: {
    changePage(value) {
      this.currentPage = value - 1;
    },
    movePage(moveIndex) {
      let newPage = this.currentPage + moveIndex;
      if (newPage >= 0 && newPage < this.products.length) {
        this.currentPage = newPage;
      }
    },
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