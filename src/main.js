import { createApp } from "vue";
import { install } from "@icon-park/vue-next/es/all";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./style.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
  transition: "Vue-Toastification__bounce",
  maxToasts: 3,
  newestOnTop: false,
  timeout: 3000,
  closeOnClick: false,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  class: "customToastContainer",
  toastClassName: ["customToast"],
};

const app = createApp(App); // 将创建 app 提前
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(Toast, options); // 在 app 初始化后使用 Toast
install(app);

app.mount("#app");
