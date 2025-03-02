import { createRouter, createWebHistory } from "vue-router"

import HomeView from "../views/HomeView.vue"
import MenuView from "../views/MenuView.vue"
import AboutView from "../views/AboutView.vue"
import OrderView from "../views/OrderView.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			redirect: "/accueil"
		},
		{
			path: "/accueil",
			name: "home",
			component: HomeView
		},
		{
			path: "/menu",
			name: "menu",
			component: MenuView
		},
		{
			path: "/a-propos",
			name: "about",
			component: AboutView
		},
		{
			path: "/commander",
			name: "order",
			component: OrderView
		}
	]
});

export default router;
