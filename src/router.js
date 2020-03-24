import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/AboutUs'
import Product from './views/ProductPage'

Vue.use(VueRouter);

const myRoutePaths = [
    {
        path: "/", 
        component : Home
    },
    {
        path: "/about",
         component : About
    },
    {
        path: "/product/:id",
        name: 'product',
         component : Product
    },
];

const router = new VueRouter({
    routes: myRoutePaths,
    mode: "history"
});

export default router


