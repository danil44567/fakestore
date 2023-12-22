<template>
  <div @click="changePage">
      <p class="non-selectable">{{ value }}</p>
    </div>
</template>

<script>
export default {
    props: ["value"],
    methods:{
        changePage()
        {
            this.$emit("changePage", this.value)
        }
    }
}
</script>

<style>

</style>