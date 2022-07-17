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
  component: import('../pages/Contact.vue'),
};
const f04Route: RouteRecordRaw = {
	path: "/404",
	name: "⓸⓪⓸",
	component: () => import("../pages/404.vue"),
	meta: {
		isInvisible: true
	}
};
const DNERoute: RouteRecordRaw = {
	path: '/:pathMatch(.*)*',
	name: '⓸⓪⓸',
	redirect: '/404',
	meta: {
		isInvisible: true,
	}
};
const skillsRoute = {
	path: 'skills',
	name: 'skills',
	component: () => import('@/pages/employment/Skills.vue'),
};
const certificatesRoute = {
	path: 'certifications',
	name: 'certificate',
	component: () => import('@/pages/employment/Certificates.vue'),
};
const employmentRoute: RouteRecordRaw = {
	path: '/employment',
	name: 'employment',
	component: () => import('@/pages/employment/Employment.vue'),
	children: [
		certificatesRoute,
		skillsRoute
	],
	
};

const routes: RouteRecordRaw[] = [homeRoute, aboutRoute, contactRoute, DNERoute, f04Route, employmentRoute];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "has-text-weight-bold is-underlined",
});

export default router;