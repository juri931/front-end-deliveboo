<script>
import { store } from "../data/store";
export default {
  name: "Error404",
  data() {
    return {
      store,
    };
  },
  // mounted() {
  //   this.store.selected = [];
  // },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center my-5">Error 404</h1>
    <p>Pagina non trovata</p>
  </div>
</template>

<style lang="scss" scoped></style>
