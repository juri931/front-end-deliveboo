import { createStore } from "vuex";

//? Salvataggio dei dati nel localStorage
const saveCartToLocalStorage = (cart) => {
  // localStorage.setItem("cart", JSON.stringify(cart));

  if (cart && cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    localStorage.removeItem("cart");
  }
};

//? Caricamento dei dati dal localStorage
const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

//% Salvo il ristorante
const saveCurrentRestaurantToLocalStorage = (restaurant) => {
  if (restaurant) {
    localStorage.setItem("currentRestaurant", JSON.stringify(restaurant));
  } else {
    localStorage.removeItem("currentRestaurant");
  }
};

//% Carico il ristorante
const loadCurrentRestaurantFromLocalStorage = () => {
  const restaurant = localStorage.getItem("currentRestaurant");
  return restaurant ? JSON.parse(restaurant) : null;
  // return restaurant ? JSON.parse(restaurant) : [];
};

// Creo lo store con il ristorante e i piatti che ho messo nel carrello.
export const store = createStore({
  state: {
    cart: loadCartFromLocalStorage(),
    currentRestaurant: loadCurrentRestaurantFromLocalStorage(),
    // cart: [], // Array per contenere i piatti nel carrello
  },

  mutations: {
    // pusho e salvo il piatto e l'id del ristorante
    addToCart(state, { dish, restaurant }) {
      // ? Gestisco il contatore del piatto singolo
      const item = state.cart.find((i) => i.dish.id === dish.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ dish, quantity: 1 });
        if (!state.currentRestaurant) {
          state.currentRestaurant = restaurant;
        }
      }

      // ! Aggiorno i dati nel localStorage
      saveCartToLocalStorage(state.cart);
      saveCurrentRestaurantToLocalStorage(state.currentRestaurant);
    },

    //! rimuovo e salvo le modifiche
    removeFromCart(state, dish) {
      console.log("rimuovo dal carrello con dish->id", dish.id);
      const index = state.cart.findIndex((item) => item.dish.id === dish.id);
      if (index !== -1) {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
        } else {
          state.cart.splice(index, 1);
        }
      }
      //! Salvo il carrello aggiornato nel localStorage
      saveCartToLocalStorage(state.cart);
      //! controllo se devo resettare il controllo del ristorante nel localStoraga
      //! Se il carrello è vuoto svuto anche currentRestaurant
      if (state.cart.length === 0) {
        state.currentRestaurant = null;
        saveCurrentRestaurantToLocalStorage(null);
      }
    },

    //! Resetto il carrello
    clearCart(state) {
      state.cart = [];
      state.currentRestaurant = null;
      saveCartToLocalStorage(state.cart);
      saveCurrentRestaurantToLocalStorage(null);
    },
  },

  //? Azioni del mapActions
  actions: {
    //* Aggiungo piatto
    addToCart({ commit, state }, { dish, restaurant }) {
      if (
        state.currentRestaurant &&
        state.currentRestaurant.id !== restaurant.id
      ) {
        throw new Error("Puoi ordinare solo da un ristorante alla volta.");
      }
      commit("addToCart", { dish, restaurant });
    },

    //* Rimuovo il piatto
    removeFromCart({ commit }, dish) {
      commit("removeFromCart", dish);
    },

    //! Pulisco il carrello
    clearCart({ commit }) {
      commit("clearCart");
    },
  },

  //? mapGetters
  getters: {
    cartItems: (state) => state.cart,
    currentRestaurant: (state) => state.currentRestaurant,
  },
});
