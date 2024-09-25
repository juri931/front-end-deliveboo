<script>
import axios from "axios";
import { store } from "../../data/store.js";

export default {
  data() {
    return {
      store,
      axios,
      nameToSearch: "",
      icons: "img/food-type/",
      myString: "",
      selectedTypes: [],

      ricerca: "",
    };
  },

  methods: {
    saveTypes(typeName) {
      if (this.store.selected.includes(typeName)) {
        this.store.selected = this.store.selected.filter(
          (type) => type !== typeName
        );
      } else {
        this.store.selected.push(typeName);
      }
      this.myString = this.store.selected.toString();
      this.getRestaurantsByType();
    },

    async getRestaurantsByType() {
      store.message = "";
      this.store.loadingRestaurant = true;

      this.ricerca =
        this.store.selected.length === 0
          ? this.store.apiUrl + "/restaurants"
          : this.store.apiUrl + "/restaurants/type/?types=" + this.myString;

      await axios
        .get(this.ricerca)
        .then((result) => {
          store.restaurants = result.data.restaurants;
          console.log(store.restaurants);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        })
        .finally(() => {
          setTimeout(() => {
            this.store.loadingRestaurant = false;
          }, 1500);
          this.myString = "";
        });
    },
    jumboSearch() {
      if (this.store.jumboChoose != "") {
        this.saveTypes(this.store.jumboChoose);
        this.store.jumboChoose = "";
      }
    },
    async search() {
      store.message = "";
      if (this.nameToSearch.length > 0 && this.store.restaurants.length > 1) {
        const searchLower = this.nameToSearch.toLowerCase();
        const filteredRestaurants = this.store.restaurants.filter(
          (restaurant) => restaurant.name.toLowerCase().includes(searchLower)
        );
        store.restaurants = filteredRestaurants;
        this.nameToSearch = "";
      } else {
        this.store.selected = [];
        await this.getRestaurantsByType();
        const searchLower = this.nameToSearch.toLowerCase();
        const filteredRestaurants = this.store.restaurants.filter(
          (restaurant) => restaurant.name.toLowerCase().includes(searchLower)
        );
        store.restaurants = filteredRestaurants;
        this.nameToSearch = "";
      }
    },
  },
  mounted() {
    this.jumboSearch();
    this.getRest;
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="container">
      <form class="d-flex my-5 pt-5" role="search" @submit.prevent="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Ricerca per Nome"
          aria-label="Search"
          v-model.trim="this.nameToSearch"
        />
        <button class="btn btn-warning search" type="submit">Cerca</button>
      </form>
    </div>
    <!--? Riga -->
    <div class="row justify-content-center px-5">
      <!--% Colonne -->
      <div
        class="col-md-2 col-sm-3 col-4 mb-4"
        v-for="item in this.store.types"
        :key="item.id"
        @click="saveTypes(item.name)"
      >
        <div
          class="type-card"
          :class="{ active: store.selected.includes(item.name) }"
        >
          <!-- :class="[selected ? isSelected : notSelected]" -->
          <div class="type-icon my-3">
            <img :src="`${icons}${item.name}.png`" :alt="`${item.name}`" />
          </div>
          <p class="my-3">{{ item.name }}</p>
        </div>
      </div>
      <!--% /Colonne -->
    </div>
    <!--? /Riga -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;

$type-card-bg-color: #ececec;
$type-card-bg-color-active: #e88735;
$type-card-text-color: #000000;

// .my-text{
//   color: #e88735;
// }

.type-card {
  color: $type-card-text-color;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // formato
  min-width: 100px;
  // aspect-ratio: 1;
  border: 3px solid #e88735;
  border-radius: 20px;
  font-weight: 500;

  // /formato
  cursor: pointer;

  // Effetti
  transition: all 0.3s ease-out;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.05);
  }
  .type-icon {
    width: 40px;
    // img {
    // }
  }

  &.active {
    background-color: $type-card-bg-color-active;
    color: white;
  }

  .container-fluid {
    padding: 20px;
  }
}
.btn.btn-warning.search {
  --bs-btn-color: white !important;
  --bs-btn-border-color: #e88735 !important;
  --bs-btn-hover-color: #000;
  --bs-btn-hover-bg: #e88735 !important;
  --bs-btn-hover-border-color: #e88735 !important;
  --bs-btn-focus-shadow-rgb: 255, 193, 7;
  --bs-btn-active-color: #000;
  --bs-btn-active-bg: #e88735 !important;
  --bs-btn-active-border-color: #e88735 !important;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #e88735 !important;
  --bs-btn-disabled-bg: transparent;
  --bs-btn-disabled-border-color: #e88735 !important;
  --bs-gradient: none;
  background-color: #e88735 !important;
  // border: none !important;
  &:hover {
    color: #fff;
    background-color: #e88735 !important;
    border-color: none !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
}
input {
  border-radius: 22px !important;
}
input:focus {
  border-color: #e88735 !important;
  box-shadow: 0 0 0 0.25rem rgba(232, 135, 53, 0.4) !important;
}

@media (max-width: 992px) {
  .type-card {
    font-size: 0.8em;
  }
}
</style>
