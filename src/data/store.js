import { reactive } from "vue";
import Restaurant from "../components/AdvancedSearch-partials/Restaurant.vue";

export let store = reactive({
  apiUrl: "http://127.0.0.1:8000/api",

  //! Variabile Loader
  loading: false,
  restaurants: [],
  restaurant_detail: [],
  // restaurant_selected: [],
  message: "",
  jumboChoose: "",
  selected: [],
  types: [],
  loadingRestaurant: false,
});
