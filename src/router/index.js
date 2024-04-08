import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/SinglePostView.vue"

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/post",
		name: "post",
		component: PostView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
