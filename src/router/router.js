import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage"
import MainPage from "@/pages/MainPage";

const routes = [
    {
        path: '/post',
        component: PostPage
    },
    {
        path: '/',
        component: MainPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;