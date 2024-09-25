<script>
import AsideAdvResearch from "../components/AdvancedSearch-partials/AsideAdvResearch.vue";
import Banner from "../components/AdvancedSearch-partials/Banner.vue";
import FoodType from "../components/AdvancedSearch-partials/FoodType.vue";
import Restaurant from "../components/AdvancedSearch-partials/Restaurant.vue";
import Partner from "../components/Main-partials/Partner.vue";
import Loader from "../components/partials/Loader.vue";

import { store } from "../data/store";
export default {
  name: "advanceResearch",

  components: {
    AsideAdvResearch,
    Banner,
    FoodType,
    Restaurant,
    Partner,
    Loader,
  },

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="menuJumbo">
    <img src="\public\img\restaurants-top.jpg" alt="jumbo-picture" />
  </div>
  <div class="container my-5">
    <!-- <h1 class="my-5">Ricerca avanzata</h1> -->
    <!-- <AsideAdvResearch /> -->
    <!-- <Banner /> -->
    <div v-if="store.loading">
      <Loader />
    </div>
    <div v-else>
      <FoodType />
      <Restaurant />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;
.menuJumbo {
  // width: 100%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    position: absolute;
    z-index: -1;
    opacity: 0.5;
  }
}
// Mobile
@media screen and (max-width: 660px) {
}

// Tablet
@media screen and (min-width: 768px) {
  .menuJumbo {
    img {
      max-height: calc(52vh);
    }
  }
}

// Desktop
@media screen and (min-width: 1200px) {
  .menuJumbo {
    img {
      max-height: calc(70vh);
    }
  }
}
</style>
