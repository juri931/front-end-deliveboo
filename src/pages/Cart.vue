<script>
import { mapGetters, mapActions } from "vuex";
import { useToast } from "vue-toastification";
import Paym from "../components/Cart/Paym.vue";
import { store } from "../data/store";

export default {
  name: "cart",

  components: {
    Paym,
  },

  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      store,
    };
  },

  methods: {
    ...mapActions(["removeFromCart", "clearCart", "addToCart"]),

    incrementItem(item) {
      if (this.currentRestaurant) {
        this.addToCart({
          dish: item,
          restaurant: this.currentRestaurant,
        });
        this.toast.success(`${item.name} aggiunto al carrello.`);
      } else {
        console.error("Ristorante corrente errato!");
      }
    },

    decrementItem(item) {
      this.removeFromCart(item);
      this.toast.warning(`${item.name} rimosso dal carrello.`);
    },

    clearCartHandler() {
      this.clearCart();
      this.toast.error("Carrello svuotato.");
    },

    imageUrl(dish) {
      let baseUrl = "http://localhost:8000/storage/" + dish;
      console.log("link img>>>>>>", baseUrl);
      return baseUrl;
    },
  },

  // mounted() {
  //   this.store.selected = [];
  // },

  computed: {
    ...mapGetters(["cartItems", "currentRestaurant"]),

    totalPrice() {
      return this.cartItems
        .reduce(
          (total, item) => total + parseFloat(item.dish.price) * item.quantity,
          0
        )
        .toFixed(2);
    },
  },
};
</script>
<template>

  <div class="cart-page d-flex flex-column min-vh-100">
    <div
      class="container-fluid cart-detail d-flex flex-grow-1 justify-content-center"
      :class="{ sinistra: cartItems.length > 0 }"
    >
      <div class="row col-12 cart-content" style="justify-content: center">
        <div class="col-12 col-md-6">
          <div class="cart-sx">
            <h1 class="my-4 text-center">Dettagli del Carrello</h1>

            <h4 v-if="currentRestaurant">
              Ordine da: <router-link :to=" {name: 'restaurantMenu', params:{ id:'currentRestaurant.id' }} " class="router-restaurant" ><strong>{{ currentRestaurant.name }}</strong></router-link>
            </h4>
            <div v-if="cartItems.length > 0">
              <div>
                <div
                  v-for="(item, index) in cartItems"
                  :key="index"
                  class="my-3"
                >
                  <div class="d-md-flex">
                    <div class="dish-img">
                      <img
                        :src="`${imageUrl(item.dish.image)}`"
                        class="card-img"
                        :alt="item.name"
                      />
                    </div>
                    <div class="align-content-center ms-md-3">
                      {{ item.dish.name }} - &euro;{{
                        item.dish.price.replace(".", ",")
                      }}
                    </div>
                  </div>
                  <div class="buttons mb-3">
                    <button
                      @click="decrementItem(item.dish)"
                      class="btn my-btn"
                      style="
                        --bs-btn-padding-y: 0.25rem;
                        --bs-btn-padding-x: 0.5rem;
                        --bs-btn-font-size: 0.75rem;
                      "
                    >
                      <i class="fa-solid fa-minus my-icon"></i>
                    </button>

                    <div class="text-center pt-1">
                      {{ item.quantity }}
                    </div>

                    <button
                      @click="incrementItem(item.dish)"
                      class="btn my-btn"
                      style="
                        --bs-btn-padding-y: 0.25rem;
                        --bs-btn-padding-x: 0.5rem;
                        --bs-btn-font-size: 0.75rem;
                      "
                    >
                      <i class="fa-solid fa-plus my-icon"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h4>Totale: &euro;{{ totalPrice.replace(".", ",") }}</h4>
              </div>
              <button
                @click="clearCartHandler"
                class="btn btn-outline-warning my-3 svuota-carrello"
              >
                Svuota Carrello
              </button>
            </div>
            <div v-else>
              <p class="text-center">Il carrello è vuoto</p>
            </div>
          </div>
        </div>

        <div v-if="cartItems.length > 0" class="col-12 col-md-6">
          <!--? Passo le props al Paym component -->
          <div class="my-5">
            <Paym
              :cartItems="cartItems"
              :totalPrice="totalPrice"
              :currentRestaurant="currentRestaurant"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

.cart-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dish-img {
  height: 100px;
  aspect-ratio: 1;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

.cart-detail {
  padding: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;

  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    & button {
      text-align: center;
    }
  }
}

.cart-content {
  flex-grow: 1;
}

// .card-img {
//   object-fit: contain;
//   height: 100%;
//   width: 100%;
// }

.cart-sx {
  border: 3px solid rgb(232, 135, 53);
  border-radius: 20px;
  .router-restaurant{
    color: inherit;
    text-decoration: none;
  }

  padding: 20px;
  .my-btn {
    border: 3px solid #e88735;
    color: #e88735 !important;
    border-radius: 50%;
    padding: 5px 7px !important;
    .my-icon {
      font-size: 0.8rem;
    }
  }
}

.btn.btn-outline-warning.svuota-carrello {
  --bs-btn-color: #e88735 !important;
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
  // border: none !important;
  &:hover {
    color: #fff;
    background-color: #e88735 !important;
    border-color: none !important;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }

  .sinistra {
    justify-content: left !important;
  }
}
</style>
