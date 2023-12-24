<template>
  <h1>Корзина</h1>
  <LoadingSpinner v-if="isLoading" :isError="isApiError" />

  <p v-if="products.length == 0 && isLoading == false">Корзина пуста...</p>
  <div class="row" v-if="products.length > 0">
    <div class="d-flex gap-3 flex-column col-8">
      <ProductCardInCart
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :description="product.description"
        :image="product.image"
        :price="product.price"
        :rate="product.rating.rate"
      >
      </ProductCardInCart>
      <button @click="clearCart">Очистить</button>
    </div>
    <div class="cart__price-block col-4">
      <div class="d-flex justify-content-between">
        <p>Итого</p>
        <p>{{ priceSum }}$</p>
      </div>

      <p class="product__delivery"><span>Доставка</span> когда-нибудь</p>
      <button>Оплатить</button>
    </div>
  </div>
</template>

<script>
import ProductCardInCart from "@/components/ProductCardInCart.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  data() {
    return {
      products: [],
      isLoading: true,
      isApiError: false,
      priceSum: 0,
    };
  },
  emits: ["cartUpdate"],
  methods: {
    clearCart() {
      this.products = [];
      localStorage.setItem("cart", this.products);
      this.$emit("cartUpdate", this.products);
    },
    calculateSum() {
      let newSum = 0;
      this.products.forEach((element) => {
        newSum += element.price;
      });
      newSum = Math.round(newSum * 100) / 100;
      this.priceSum = newSum;
    },
  },
  updated() {
    this.calculateSum();
  },
  mounted() {
    let local = localStorage.getItem("cart");
    if (local != undefined && local != "") {
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
        .then(() => {
          this.isLoading = false;
        })
        .catch(() => {
          this.isApiError = true;
        });
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
.cart__price-block {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.442);
  border-radius: 30px;
  height: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.cart__price p {
}
</style>