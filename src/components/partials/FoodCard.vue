<script>
import { mapActions } from "vuex/dist/vuex.cjs.js";
import { useToast } from "vue-toastification";
export default {
  props: {
    dish: Object,
    restaurantName: String,
  },

  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions(["addToCart"]),
    addToCartHandler() {
      try {
        console.log("Nome ristorante>>>>>>>", this.dish.restaurant_name);
        const restaurant = {
          id: this.dish.restaurant_id,
          name: this.dish.restaurant_name,
        };
        this.addToCart({
          dish: this.dish,
          restaurant: restaurant,
        });
        console.log("questo è il piatto che sto aggiungendo>>>>", this.dish);
        this.toast.success(`${this.dish.name} aggiunto al carrello.`);
      } catch (error) {
        this.toast.error(error.message);
      }
    },
  },
  computed: {
    imageUrl() {
      const baseUrl = "http://localhost:8000/storage";
      return `${baseUrl}/${this.dish.image}`;
    },
  },

  mounted() {
    console.log("dish>>>>", this.dish);
  },
};
</script>
<template>
  <div v-if="dish.visibility" class="col d-flex justify-content-center my-3">
    <div class="food-card card">
      <div>
        <img :src="imageUrl" class="card-img" :alt="dish.name" />
      </div>
      <div class="food-info">
        <h5 class="">{{ dish.name }}</h5>
        <p class="">{{ dish.desc }}</p>
        <p>&euro; {{ dish.price }}</p>

        <!--* Vegan -->
        <div v-show="dish.vegan" class="vegan">
          <i class="fa-solid fa-leaf"></i>
        </div>
        <!--* /Vegan -->
      </div>
      <div class="add-to-cart">
        <button type="button" class="btn my-cart" @click="addToCartHandler">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>

    <!--? /Informazioni piatto e aggiunta al carrello -->
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/general" as *;
@use "../../assets/scss/partials/variables" as *;
$food-card-bg-color: #ececec;
$food-card-text-color: #b2adbe;
$vegan-icon-color: #059862;
.food-card {
  background-color: white;
  color: $food-card-text-color;
  display: flex;
  flex-direction: column;
  align-items: left;

  // formato
  min-height: 100%;
  min-width: 100%;
  border-radius: 20px;
  // /formato

  // Debug TODO: togliere
  // cursor: pointer;

  // Effetti
  transition: all 0.6s;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  &:hover {
    scale: 1.01;
  }

  .card-img {
    height: 300px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    object-fit: cover;
  }

  // Info piatto
  .food-info {
    padding: 15px 30px;
    color: black;
    position: relative;
  }
  // /Info piatto

  // Aggiungi al carrello
  .add-to-cart {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 20px;
  }
  // /Aggiungi al carrello

  // Icon cart
  .my-cart {
    background-color: rgb(232, 135, 53);
    color: white;
  }
  // /Icon cart

  // Icon vegan
  .vegan {
    position: absolute;
    top: 20px;
    right: 5px;
    transform: translate(-50%, -50%);

    i {
      font-size: 1.2em;
      color: $vegan-icon-color;
    }
  }
  // /Icon vegan
}
</style>
