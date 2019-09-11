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
    {path: '/', component: require('./components/Home.vue').default},

    {path: '', component: require('./components/User/Menu.vue').default, 
        children: [  
            {path: 'users', component: require('./components/admin/User/Users.vue').default},
            {path: 'product', component: require('./components/admin/Product/Products.vue').default},
            {path: 'orders', component: require('./components/admin/Product/Orders.vue').default},
            {path: 'developer', component: require('./components/admin/dev/Developer.vue').default},
            {path: 'profile', component: require('./components/User/Profile.vue').default},
            {path: 'userBoard', component: require('./components/User/UserBoard.vue').default},
        ]    
    },

    {path: '/miniCart', name:'miniCart', component: require('./components/Cart/MiniCart.vue').default},
    {path: '/details', name:'details', component: require('./components/Products/Details.vue').default},
    {path: '/products', name:"products", component: require('./components/Products/ProductList/ProductList.vue').default},
    {path: '/checkout', component: require('./components/Cart/Checkout.vue').default},
    {path: '*', component: require('./components/NotFound.vue').default},
]

const router = new VueRouter({
    mode: 'hash',
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
})

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue')
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue')
);

Vue.component(
    'example-component', 
require('./components/ExampleComponent.vue').default);

Vue.component(
    'add-to-cart', 
require('./components/Cart/AddToCart.vue').default);

Vue.component(
    'add-to-compare', 
require('./components/Compare/AddToCompare.vue').default);

Vue.component( 
    'navbar', 
require('./components/Navbar.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);
Vue.component('products-component', require('./components/Products/ProductList/Products.vue').default);
Vue.component('miniCart', require('./components/Cart/MiniCart.vue').default);
Vue.component('miniList', require('./components/Compare/MiniList.vue').default);
Vue.component('newProducts', require('./components/Products/NewProducts.vue').default);
Vue.component('relatedProducts', require('./components/Products/RelatedProducts.vue').default);
Vue.component('productsCategory', require('./components/Products/ProductsCategory.vue').default);
Vue.component('icon-corner', require('./components/IconCorner.vue').default);
Vue.component('star-rating', StarRating);

Vue.component('compareList', require('./components/Compare/CompareList.vue').default)

Vue.filter('upText', function(text) {
    return text.charAt(0).toUppercase() + text.slice(1);
})

Vue.filter('myDate', function(created) {
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

    if(requiresAuth) {
        next('/')
    } else if(requiresAuth) {
        next()
    } else {
        next()
    }
})

router.afterEach((to, from) => {
// Complete the animation of the route progress bar.
    app.$Progress.finish()
})