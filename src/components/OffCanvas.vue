<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Категории</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <LoadingSpinner v-if="categories.length == 0" :isError="isApiError" />

      <router-link
        @click="hideOffCanvas"
        v-for="(category, index) in categories"
        :key="index"
        :to="{ name: 'category', params: { name: category } }"
      >
        <p>
          {{ category }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  name: "OffCanvas",
  data() {
    return {
      categories: [],
      isApiError: false,
    };
  },
  mounted() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => (this.categories = json))
      .catch(() => (this.isApiError = true));
  },
  methods: {
    hideOffCanvas() {
      bootstrap.Offcanvas.getInstance(
        document.getElementById("offcanvasRight")
      ).hide();
    },
  },
  components: {
    LoadingSpinner,
  },
};
</script>

<style>
.offcanvas-body p {
  padding: 5px;
  border-radius: 5px;
}

.offcanvas-body a {
  text-decoration: none;
  color: inherit;
}

.offcanvas-body p::first-letter {
  text-transform: uppercase;
}

.offcanvas-body p:hover {
  background-color: #0da659;
}
</style>