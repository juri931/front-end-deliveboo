<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/partials/Loader.vue";
import ScrollUp from "./components/partials/ScrollUp.vue";
import axios from "axios";
import { store } from "./data/store";

export default {
  components: {
    Header,
    Loader,
    Footer,
    ScrollUp
  },

  data() {
    return {
      axios,
      store,
      isApiCallInProgress: false,
      // typeName: [],
    };
  },

  methods: {
    async getApi() {
      if (this.isApiCallInProgress) return;

      this.isApiCallInProgress = true;
      this.store.loading = true;

      try {
        const result = await axios.get(`${store.apiUrl}/restaurants`);
        store.restaurants = result.data.restaurants;
        console.log(store.restaurants);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          this.store.loading = false;
          this.isApiCallInProgress = false;
        }, 1000);
      }
    },
    async getTypes() {
      store.message = "";
      axios
        .get(store.apiUrl + "/types")
        .then((result) => {
          this.store.types = result.data.types;
          console.log(result.data.types);
          console.log(this.store.types);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    },
  },
  mounted() {
    this.getApi(this.$route.params);
    this.getTypes();
    this.store.selected = [];
  },
};
</script>

<template>
  <ScrollUp />
  <!--* Loader -->
  <div v-if="store.loading">
    <Loader />
  </div>
  <!--* /Loader -->
  <!--? Contenuto Pagina -->
  <div v-else class="main-content">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="scss">
@use "./assets/scss/main.scss";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>
