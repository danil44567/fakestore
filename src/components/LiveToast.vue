<template>
          <div
          :id="toast"
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-delay="1000"
        >
          <div class="toast-header">
            <img
              src="@\assets\cart_nxs4fyq12xid.svg"
              class="rounded me-2"
              alt=""
            />
            <strong class="me-auto">Корзина</strong>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">{{ text }}</div>
        </div>
</template>

<script>
export default {
    props: ["toast","text"]
}
</script>

<style>

</style>