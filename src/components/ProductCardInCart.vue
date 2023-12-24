<template>
  <router-link
    class="product-in-cart"
    :to="{ name: 'product', params: { id: this.id } }"
  >
    <div class="product-in-cart__body">
      <div class="d-flex gap-4">
        <img class="product-in-cart__image" :src="image" :alt="title" />
        <p>{{ title }}</p>
      </div>
      <div class="price">
        <p class="price-real">{{ price }}$</p>
        <p class="price-fake">{{ price * 2 }}$</p>
        <img
          @click.stop.prevent="removeCart"
          class="product__trash"
          src="@\assets\trash-xmark-svgrepo-com.svg"
          alt="Удаление"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["id", "title", "description", "image", "price", "rate"],
  emits: ["removeCart"],
  methods: {
    removeCart() {
      this.$emit("removeCart", this.id);
    },
  },
};
</script>

<style>
.product-in-cart {
  color: inherit;
  text-decoration: none;
}

.product-in-cart__body {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.442);
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  height: 150px;
  padding: 10px;
  justify-content: space-between;
}

.product-in-cart__body:hover .product__trash {
  display: block;
}

.product-in-cart__body .price {
  flex-direction: column;
  gap: 5px;
  align-items: end;
}

.product-in-cart__body .price p {
  margin: 0;
}
.product__trash {
  display: block;
  width: 50px;
  filter: invert(50%);
}

.product__trash:hover {
  filter: invert(0%);
}

.product-in-cart__image{
  object-fit: contain;
  width: 100px;
}

@media (min-width: 992px) {
  .product__trash {
    display: none;
  }
}
</style>