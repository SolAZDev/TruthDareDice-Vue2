import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import GameSetup from "../views/GameSetup.vue";
import MainGame from "../views/MainGame.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Game Setup",
    component: GameSetup,
  },
  {
    path: "/Game",
    name: "Truth or Dare or Dice",
    component: MainGame,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
