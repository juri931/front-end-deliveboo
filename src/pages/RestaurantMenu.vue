<script>
import FoodCard from "../components/partials/FoodCard.vue";
import { store } from "../data/store";
import AsideMenu from "../components/RestaurantMenu-partials/AsideMenu.vue";
import AsideCart from "../components/RestaurantMenu-partials/AsideCart.vue";

export default {
  name: "restaurantMenu",

  components: {
    FoodCard,
    AsideMenu,
    AsideCart,
  },

  data() {
    return {
      store,
    };
  },

  methods: {
    redirectFunction() {
      this.$router.push({ name: "advanceResearch" });
    },
  },

  mounted() {
    // Se restauntDetail è vuoto ridireziono alla advanceResearch
    // if (store.restaurant_detail.length == 0) {
    //   this.redirectFunction();
    // }
    // console.log("restaurant info", this.store.restaurant_detail);
    // console.log("TIPO>>>>", this.store.restaurant_detail.types[0].name);

    if (store.restaurant_detail.length == 0) {
      this.redirectFunction();
    } else {
      console.log("restaurant info", this.store.restaurant_detail);
      if (
        this.store.restaurant_detail.types &&
        this.store.restaurant_detail.types[0]
      ) {
        console.log("TIPO>>>>", this.store.restaurant_detail.types[0].name);
      } else {
        console.log("Nessun tipo di ristorante trovato");
      }
    }
  },
};
</script>

<template>
  <div class="containter-fluid menuJumbo">
    <img
      v-if="store.restaurant_detail.types && store.restaurant_detail.types[0]"
      :src="`img/restaurant-img/${store.restaurant_detail.types[0].name}.jpg`"
      alt="Food-picture"
    />
  </div>
  <div class="container-fluid my-5 d-flex flex-column align-items-center min-vh-100">
    <div class="col-8 col-xl-6 food-card card">
      <h1 class="text-center pt-5">{{ store.restaurant_detail.name }}</h1>
      <p class="text-center px-5 pt-5">
        {{ store.restaurant_detail.desc }}
      </p>
      <p class="text-center px-5 pt-2">
        {{ store.restaurant_detail.address }}
      </p>
    </div>
    
    
    <div class="row row-cols-2 my-5 px-3 d-flex flex-column align-items-center cont-boo">
      <div class="col-0 col-xl-3 d-none d-xl-block">
        <!-- <AsideMenu /> -->
      </div>
      <div class="col-7 col-md-8 col-xl-6">
        <!--? Card piatti -->
        <div class="row row-cols-1 row-cols-md-2">
          <FoodCard
            v-for="dish in store.restaurant_detail.dishes"
            :key="dish.id"
            :dish="{
              ...dish,
              restaurant_id: store.restaurant_detail.id,
              restaurant_name: store.restaurant_detail.name,
            }"
            :restaurantName="store.restaurant_detail.name"
          />
        </div>
        <!--? /Card piatti -->
      </div>
      <div class="col-5 col-md-4 col-xl-3 ">
        <AsideCart />
      </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>
.menuJumbo {
  // width: 100%;
  overflow: hidden;
   img {
    max-height: calc(75vh);
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
.restaurant-info {
  background-color: rgba($color: #ffff, $alpha: 0.6);
}
.food-card {
  margin-top: 50px;
  color: black;
  background-color: white;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: left;

  border-radius: 20px;
}

</style>
