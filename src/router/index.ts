import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HomeView from "../pages/Home.vue";

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
		import(/* webpackChunkName: "about" */ "../pages/About.vue"),
};
const contactRoute = {
	path: '/contact',
	name: 'contact',
	component: () => import('../pages/Contact.vue'),
};
const f04Route = {
	path: "/404",
	name: "⓸",
	component: () => import("../pages/404.vue"),
}
const DNERoute = {
	path: '/:pathMatch(.*)*',
	redirect: '/404',
};

const routes: RouteRecordRaw[] = [homeRoute, aboutRoute, contactRoute, DNERoute, f04Route];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "has-text-weight-bold is-underlined",
});


export default router;