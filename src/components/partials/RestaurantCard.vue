<script>
import { store } from "../../data/store";
import axios from "axios";
export default {
  props: {
    restaurant: Object,
  },
  data() {
    return {
      store,
      axios,
    };
  },

  methods: {
    getRestaurantDetail(idRestaurant) {
      axios
        .get(store.apiUrl + "/restaurant-info/" + idRestaurant)
        .then((result) => {
          store.restaurant_detail = result.data;

          this.$router.push({ name: "restaurantMenu" });
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    },
  },

  computed: {
    imageUrl() {
      const baseUrl = "http://localhost:8000/storage";
      if(this.restaurant.image && this.restaurant.image.startsWith('http')) {
        return this.restaurant.image;
      } else {

        return `${baseUrl}/${this.restaurant.image}`;
      }
    },
  },
};
</script>
<template>
  <div class="col my-3 d-flex justify-content-center flex-wrap">
    <div class="restaurant-card">
      <!--?redirect -->

      <!--?/redirect -->
      <!--! restaurant img -->
      <!-- <div class="restaurant-tumb text-white mb-3">
        <img :src="restaurant.image" alt="">
      </div> -->
      <!--! /restaurant img -->
      <!--? restaurant info -->
      <div
        class="card mx-3"
        style="width: 18rem;"
        @click="getRestaurantDetail(restaurant.id)"
      >
      
      <!-- <img :src="restaurant.image" class="card-img-top" alt="..." /> -->
      <img :src="imageUrl" class="card-img-top" :alt="restaurant.name" />
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <p class="card-text">{{ restaurant.address }}</p>
          <div>
            <span v-for="item in restaurant.types" :key="item.id" class="me-2">
              <span class="badge rounded-pill text-bg-warning">{{
                item.name
              }}</span>
            </span>
          </div>
        </div>
      </div>
      <!-- <div class="restaurant-info">
        <h3>{{ restaurant.name }}</h3>
        <div>
          Categorie:
          <span v-for="item in restaurant.types" :key="item.id" class="me-2">
            {{ item.name }}
          </span>
        </div>
        <p>Indirizzo: {{ restaurant.address }}</p>
        <p>Descrizione: {{ restaurant.desc }}</p>
      </div> -->
      <!--? /restaurant info -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$restaurant-card-bg-color: #ffffff;
$restaurant-card-text-color: #000000;

.card {
  cursor: pointer !important;
  height: 420px;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  .card-title {
    height: 50px;
  }
  .badge {
    background-color: #e88735 !important;
    color: white !important;
  }
  .card-text {
    height: 35px;
  }
}

// .restaurant-card {
//   background-color: $restaurant-card-bg-color;
//   color: $restaurant-card-text-color;
//   border-radius: 20px;
//   border: 3px solid #e88735;
//   width: 80%;
//   padding: 20px;
//   cursor: pointer;
//   box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
//   .restaurant-tumb {
//     background-color: #210b2d;
//     width: 100%;
//     height: 150px;
//     border-radius: 20px;
//   }
// }
</style>
