<template>
  <div class="pagination col-6 mt-3 mx-auto justify-content-center">
    <div class="pagination__element right-border right-radius">
      <p>&lt;</p>
    </div>
    <div class="pagination__element right-border left-border">
      <p>1</p>
    </div>
    <div class="pagination__element right-border left-border">
      <p>2</p>
    </div>
    <div class="pagination__element right-border left-border">
      <p>3</p>
    </div>
    <div class="pagination__element left-border left-radius">
      <p>&gt;</p>
    </div>
  </div>
</template>

<script>
export default {};
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