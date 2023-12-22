<template>
  <button @click.stop.prevent="addCart">В корзину</button>
</template>

<script>
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default {
  props: ["product"],
  methods: {
    addCart() {
      let local = localStorage.getItem("cart");

      if (local == undefined) {
        let cart = [this.product];
        this.saveCart(cart);
      } else {
        let cart = JSON.parse(local);
        if (cart.indexOf(this.product) == -1) {
          cart.push(this.product);
          this.saveCart(cart);
        }
        else
        {
            this.showToast("liveToastErr")
        }
      }
    },
    saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
      this.showToast("liveToast");
    },
    showToast(id) {
      bootstrap.Toast.getOrCreateInstance(document.getElementById(id)).show();
    },
  },
};
</script>

<style>
</style>