import Vue from "vue";
import App from "./App.vue";
import buildRouter from "./router";
// import store from "./store";

export default function buildApp() {
  const router = buildRouter();
  const app = new Vue({
    // store,
    router,
    render: h => h(App)
  });

  return { app, router };
}
