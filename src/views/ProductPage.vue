<template>
  <h1 class="fs-1 fw-bold">{{ title }}</h1>
  <div class="row">
    <img class="page-image col-xl-4 col-md-6" :src="image" :alt="title" />
    <div class="price-block col-xl-3 col-md-5 g-4">
      <div class="price col-12">
        <p class="price-real">{{ price }}$</p>
        <p class="price-fake">{{ price * 2 }}$</p>
      </div>
      <p class="product__delivery"><span>Доставка</span> когда-нибудь</p>
      <AddCartButton :product="+id" class="col-12" @cartUpdate="cartUpdate"/>
    </div>
  </div>
  <p class="fs-3 fw-bold pt-3">Описание</p>
  <p>{{ description }}</p>
  <div class="rate">
    <img src="@\assets\star_9jfrkmkc6jof.svg" alt="" />
    <p class="fs-4">{{ rating.rate }}</p>
  </div>
  <div class="row">
    <p class="col-xl-1 col-sm-2 col-3 fs-4 text-black-50">Отзывы</p>
    <p class="col-1 fs-4">{{ rating.count }}</p>
  </div>
</template>

<script>
import AddCartButton from "@/components/AddCartButton.vue";

export default {
  name: "ProductPage",
  props: ["id"],
  mounted() {
    fetch("https://fakestoreapi.com/products/" + this.id)
      .then((res) => res.json())
      .then((json) => {
        this.title = json.title;
        this.image = json.image;
        this.description = json.description;
        this.price = json.price;
        this.rating = json.rating;
      });
  },
  data() {
    return {
      title: "",
      image: "",
      description: "",
      price: 0,
      rating: { count: 0, rate: 0 },
      isApiError: false,
    };
  },
  components: {
    AddCartButton,
  },
  methods: {
    cartUpdate(cart) {
      this.$emit("cartUpdate", cart);
    },
  },
};
</script>
    
<style>
.page-image {
  height: 400px;
  object-fit: contain;
}

.price-block {
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.442);
  border-radius: 10px;
  height: 140px;
}

.price-block p {
  margin: 0;
}

.price-block .price-real {
  font-size: 36px;
  font-weight: 600;
}

.price-block .price-fake {
  font-size: 24px;
}

.rate {
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 12px;
}

.rate p {
  margin: 0;
}

.rate img {
  width: 40px;
}
</style>