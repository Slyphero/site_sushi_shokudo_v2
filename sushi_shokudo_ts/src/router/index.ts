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
			alias: "",
			redirect: "/accueil"
		},
		{
			path: "/accueil",
			component: HomeView
		},
		{
			path: "/menu",
			component: MenuView
		},
		{
			path: "/a-propos",
			component: AboutView
		},
		{
			path: "/commander",
			component: OrderView
		}
	]
});

export default router;
