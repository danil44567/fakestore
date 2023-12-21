<template>
  
  <h1>{{ title }}</h1>
  <img class="page-image" :src="image" :alt="title" />
  <p>{{ description }}</p>
  <p>{{ price }} $</p>
  <p>{{ rating.rate }}</p>
  <p>{{ rating.count }}</p>
</template>

<script>
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
    };
  },
};
</script>
    
<style>
.page-image{
  height: 400px;
}
</style>