import Vue from "vue";
import Router from "vue-router";
import Home from "pages/Home.vue";

Vue.use(Router);

export default function buildRouter() {
  return new Router({
    mode: "history",
    routes: [{ path: "/", component: Home }]
  });
}