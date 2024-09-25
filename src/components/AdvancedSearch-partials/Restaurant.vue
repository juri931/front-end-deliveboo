<script>
import RestaurantCard from "../partials/RestaurantCard.vue";
import { store } from "../../data/store";
import Loader from "../partials/Loader.vue";

export default {
  components: {
    RestaurantCard,
    Loader,
  },
  data() {
    return {
      store,
      restaurants: [],
    };
  },

  mounted() {
    console.log("ristoranti>>>>>>>>>>>", this.store.restaurants);
    this.filter = this.$route.query.filter;
    this.filteredRestaurants = this.restaurants.filter((restaurant) => {
      return restaurant.type.includes(this.filter);
    });
  },
};
</script>
<template>
  <div class="container-xxl my-5">
    <h2 class="text-center">Ristoranti</h2>
    <h4>{{ store.message }}</h4>
    <div v-if="store.loadingRestaurant">
      <Loader />
    </div>
    <div v-else>
      <div
        class="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4"
        v-if="store.restaurants.length !== 0"
      >
        <RestaurantCard
          v-for="restaurant in store.restaurants"
          :key="restaurant.id"
          :restaurant="restaurant"
        />
      </div>
      <div v-else class="my-5">
        <h4 class="text-center my-5">Nessun Ristorante trovato</h4>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
</style>
