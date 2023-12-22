<template>
  <div v-if="pages > 0" class="pagination col-6 mt-3 mx-auto justify-content-center">
    <div
      class="pagination__element right-border right-radius"
      @click="movePage(-1)"
    >
      <p class="non-selectable">&lt;</p>
    </div>
    <PaginationElement
      class="pagination__element right-border left-border"
      v-for="n in pages"
      :class="{ pagination__selected: n == currentPage + 1 }"
      :key="n"
      :value="n"
      @changePage="changePage"
    />

    <div
      class="pagination__element left-border left-radius"
      @click="movePage(1)"
    >
      <p class="non-selectable">&gt;</p>
    </div>
  </div>
</template>

<script>
import PaginationElement from "./PaginationElement.vue";

export default {
  components: {
    PaginationElement,
  },
  props: ["pages", "currentPage"],
  methods: {
    changePage(value) {
      this.$emit("changePage", value);
    },
    movePage(moveIndex) {
      this.$emit("movePage", moveIndex);
    },
  },
};
</script>

<style>
.pagination__element {
  background-color: #10cc6f;
  width: 40px;
  height: 40px;
  /* border-radius: 10px; */
  border-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination__selected {
  background-color: #00ff80;
}

.pagination__selected:hover {
  background-color: #00ff80 !important;
}

.pagination__element:hover {
  background-color: #0da659;
}

.right-border {
  border-right: 1px solid;
}

.left-border {
  border-left: 1px solid;
}

.left-radius {
  border-radius: 0 10px 10px 0;
}

.right-radius {
  border-radius: 10px 0 0 10px;
}

.pagination__element p {
  margin: 0;
  text-align: center;
  vertical-align: middle;
}
</style>