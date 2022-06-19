import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("../pages/Home.vue")
const Login = () => import("../pages/Login.vue")
const Register = () => import("../pages/Register.vue")
const NotFound = () => import("../pages/404.vue")

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
