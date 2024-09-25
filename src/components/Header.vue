<script>
import axios from "axios";
import { store } from "../data/store";
export default {
  components: {},
  data() {
    return {
      store,
      axios,
      nameToSearch: "",
      // scroll
      isScrolled: false,

      // Variabile di controllo per la homepage
      isHomePage: this.$route.name === "home",
    };
  },
  methods: {
    search() {
      store.message = "";
      if (this.nameToSearch.length > 0) {
        axios
          .get(store.apiUrl + "/search/" + this.nameToSearch)
          .then((result) => {
            // this.typeName = result.data.types.name;
            console.log("RISULTATO RICERCA >>>>>>>>>", result.data);
            if (result.data.restaurants.length == 0) {
              store.message = "Nessun ristorante trovato";
            }
            console.log(store.message);
            store.restaurants = result.data.restaurants;
            this.nameToSearch = "";
            this.$router.push({ name: "advanceResearch" });

            // console.log(result.data.restaurants);
            // console.log(store.restaurants);
          })
          .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
      } else {
        this.getApi();
        this.$router.push({ name: "advanceResearch" });
      }
    },
    getApi() {
      axios
        .get(store.apiUrl + "/restaurants")
        .then((result) => {
          // this.typeName = result.data.types.name;
          store.restaurants = result.data.restaurants;
          this.store.selected = [];
          console.log(result.data.restaurants);
          console.log(store.restaurants);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    },

    // Scroll
    handleScroll() {
      // Aggiorno is scroll solo se sono nella "home"
      if (this.isHomePage) {
        // const jumbotronHeight =
        //   document.querySelector(".jumbotron").offsetHeight;
        // console.log("scroll>>>>", window.scrollY);
        this.isScrolled = window.scrollY > 50;
      }
    },
  },

  // Utilizzo un watcher su "route.name" per aggiornare:
  // isHomePage/isScrolled quando cambio la rotta
  watch: {
    "$route.name"(newName) {
      this.isHomePage = newName === "home";
      if (!this.isHomePage) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <!--* il binding di scrolled avviene solo quando sono nella "home" -->
  <header
    class="container-fluid"
    :class="{ scrolled: isScrolled || !isHomePage }"
  >
    <!--? Navbar -->
    <nav
      class="navbar fixed-top"
      :class="{ 'navbar-scrolled': isScrolled || !isHomePage }"
    >
      <div class="container">
        <div>
          <router-link
            class="navbar-brand"
            :to="{ name: 'home' }"
            @click="getApi"
            >DeliveBoo!</router-link
          >
        </div>
        <ul
          class="d-md-flex justify-content-between align-items-center pt-3 d-none"
        >
          <li class="me-3">
            <router-link :to="{ name: 'home' }" @click="getApi"
              >Home</router-link
            >
          </li>
          <li class="me-3">
            <router-link :to="{ name: 'advanceResearch' }"
              >Ristoranti</router-link
            >
          </li>
          <li class="me-3">
            <router-link :to="{ name: 'cart' }">Carrello</router-link>
          </li>

          <!-- <li class="">
            <a href="http://127.0.0.1:8000">Accedi</a>
          </li> -->
          <!-- <li class="mx-3">
            <router-link :to="{ name: 'restaurantMenu' }"
              >Menu Ristorante</router-link
            >
          </li> -->
        </ul>

        <!-- <form class="d-flex" role="search" @submit.prevent="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model.trim="this.nameToSearch"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->

        <!-- Hamburger -->
        <div class="d-md-none me-3">
          <button
            class="navbar-toggler text-white border-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="text-white"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h3 class="offcanvas-title" id="offcanvasNavbarLabel">
                Deliveboo
              </h3>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="my-3 off-a text-center">
                  <router-link :to="{ name: 'home' }" @click="getApi"
                    >Home</router-link
                  >
                </li>
                <li class="my-3 off-a text-center">
                  <router-link :to="{ name: 'advanceResearch' }"
                    >Ristoranti</router-link
                  >
                </li>
                <li class="my-3 off-a text-center">
                  <router-link :to="{ name: 'cart' }">Carrello</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Hamburger -->
      </div>
    </nav>
    <!--? /Navbar -->
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

header {
  width: 99vw !important;
  @media screen and (max-width: 700px) {
    font-size: 0.6rem;
  }

  nav {
    height: 70px;
    transition: background-color 0.3s;

    &.navbar-scrolled {
      background-color: #181b21;
    }

    .navbar-brand {
      display: none;
      color: #fff;
      font-family: "Pacifico", cursive;
      text-shadow: 1px 2px 0px #478860;
      transform: rotate(-5deg);
    }

    li {
      list-style: none;
      // padding-top: 5px;
      a {
        color: white;
        text-decoration: none;
        &:hover {
          color: #e88735;
        }
      }
    }
  }
}

// resetto l'altezza
header.container-fluid {
  margin-top: 0 !important;
}

header.scrolled nav {
  background-color: #181b21;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  .navbar-brand {
    display: block;
  }
}

.offcanvas-body {
  .off-a {
    a {
      color: #000 !important;
      font-size: 2em;
    }
  }
}
</style>
