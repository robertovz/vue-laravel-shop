
import Menu from "./components/menu/Menu";
import Users from "./components/menu/Admin/Users";
import Product from "./components/menu/Admin/Products";
import Orders from "./components/menu/Admin/Orders";
import Profile from "./components/menu/User/Profile";
import Userboard from "./components/menu/User/Userboard";
import Details from "./components/Products/Details";
import Products from "./components/Products/ProductList/ProductList";
import Cart from "./components/Cart/CheckOut";
import miniCart from "./components/Cart/MiniCart";
import notFound from "./components/NotFound";

import App from './components/App.vue'

require('./bootstrap');

window.Vue = require('vue');

import moment from 'moment';
import { Form, HasError, AlertError } from 'vform';

import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import store from './store.js';

import swal from 'sweetalert2';
window.swal = swal;

Vue.component('pagination', require('laravel-vue-pagination'));

import VueEditor from 'vue2-editor';
Vue.use(VueEditor);

import Tabs from 'vue-tabs-component';
Vue.use(Tabs);

import Vue2Filters from 'vue2-filters';
Vue.use(Vue2Filters);

import StarRating from 'vue-star-rating';

window.$ = require('jquery');

const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})

import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {
    color: '#04a7bb',
    failedColor: 'red',
    height: '3px',
    transition: {
        speed: '2s',
        termination: 300
    },
    autoRevert: true,
})

import NProgress from 'vue-nprogress'
Vue.use(NProgress)


window.toast = toast;

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

let routes = [
    { path: '/', component: require('./components/Home.vue').default },
    { path: '/products', name: "products", component: Products },
    { path: '/details/:p_name/:p_id', name: "details", component: Details },
    {
        path: '', name: "Menu", component: Menu, meta: { requiresAuth: true },
        children: [
            { path: "/users", name: "Users", component: Users },
            { path: "/product", name: "Product", component: Product },
            { path: "/orders", name: "Orders", component: Orders },
            { path: 'developer', component: require('./components/Menu/Developer.vue').default },
            { path: "/profile", name: "Profile", component: Profile },
            { path: "/userboard", name: "Userboard", component: Userboard },
        ]
    },

    { path: '/miniCart', name: 'miniCart', component: miniCart },
    { path: '/checkout', name: 'Cart', component: Cart },
    { path: '*', name: 'notFound', component: notFound },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
})

Vue.component('passport-clients', require('./components/passport/Clients.vue'));
Vue.component('passport-authorized-clients', require('./components/passport/AuthorizedClients.vue'));
Vue.component('passport-personal-access-tokens', require('./components/passport/PersonalAccessTokens.vue'));
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('add-to-cart', require('./components/Cart/AddToCart.vue').default);
Vue.component('add-to-compare', require('./components/Compare/AddToCompare.vue').default);
Vue.component('navbar', require('./components/Navbar.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);
Vue.component('products-component', require('./components/Products/ProductList/Products.vue').default);
Vue.component('miniCart', require('./components/Cart/MiniCart.vue').default);
Vue.component('miniList', require('./components/Compare/MiniList.vue').default);
Vue.component('productsCategory', require('./components/Products/ProductsCategory.vue').default);
Vue.component('icon-corner', require('./components/IconCorner.vue').default);
Vue.component('star-rating', StarRating);

Vue.component('compareList', require('./components/Compare/CompareList.vue').default)

Vue.filter('upText', function (text) {
    return text.charAt(0).toUppercase() + text.slice(1);
})

Vue.filter('myDate', function (created) {
    return moment(created).format('MMMM Do YYYY');
})

window.Fire = new Vue();
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');


router.beforeResolve((to, from, next) => {
    app.$Progress.start()
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

    const currentUser = Vue.prototype.$gate.user == undefined || '' ? true : false;

    if (requiresAuth && currentUser) {
        next('/')
    } else if (requiresAuth && !currentUser) {
        next()
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    // Complete the animation of the route progress bar.
    app.$Progress.finish()
})