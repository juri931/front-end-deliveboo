<script>
export default {
  name: "OrderConfirmation",
  props: {
    orderId: String,
  },
};
</script>

<template>
  <div class="container-fluid m-5 order-conf">
    <div class="p-5 text-center">
      <h1>Ordine Confermato</h1>
      <h5 class="py-4">Il tuo ordine è andato a buon fine!</h5>
      <p>
        Codice della transazione: <strong>{{ orderId }}</strong>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

.order-conf {
  min-height: 80vh;
}
</style>
