import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../pages/HomeView.vue";

let homeRoute = {
  path: "/",
  name: "home",
  component: HomeView,
};
const aboutRoute = {
  path: "/about",
  name: "about",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutView.vue"),
};
const contactRoute = {
  path: '/contact',
  name: 'contact',
  component: () => import('../pages/ContactView.vue'),
};
const routes: Array<RouteRecordRaw> = [
  homeRoute,
  aboutRoute,
  contactRoute
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;