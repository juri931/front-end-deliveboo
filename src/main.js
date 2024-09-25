import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router.js";
import { store } from "./store/index.js";
// import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

//? Personalizzazione toast
const options = {
  position: "bottom-center",
  timeout: 2500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};

createApp(App).use(router).use(store).use(Toast, options).mount("#app");
