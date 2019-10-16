import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');
let compare = window.localStorage.getItem('compare');
let lastProduct = window.localStorage.getItem('lastProduct');
let viewProducts = window.localStorage.getItem('viewProducts');
let activities = window.localStorage.getItem('activities');

export default new Vuex.Store({
    state: {
        cart:[],
        compare:[],
        lastProduct:  [],
        viewProducts: [],
        activities: [],
        products: {},
        subTotal: 0,
        tax: 0,
        total: 0,
        search: ''
    },

    getters: {
        
        subTotal: state => {
            state.subTotal = 0;
            state.cart.filter((item) => {
                state.subTotal += (item.price * item.quantity);
            })
            return state.subTotal;
        },
        tax: state => {
            state.tax = state.subTotal * 0.1;
            return state.tax;
        },
        totalPrice: state => {
            state.total = state.subTotal + state.tax;
            return state.total;
        },

    },

    mutations: {

        searchit(state, item) {
            state.search = item;
            Fire.$emit('searching');
        },

        addLastProduct(state, item) {
            state.lastProduct = item;
            let found = state.viewProducts.find(product => product.id == item.id);
            if(!found) {
                state.viewProducts.push(item);
                item.activity = "view";
                state.activities.push(item);
            }
            this.commit('storeItem');
        },

        removeFromProducts(state, item) {
            let index = state.viewProducts.indexOf(item);
            state.viewProducts.splice(index, 1);

            this.commit('storeItem');
        },

        userActivities(state, item) {
            let found = state.activities.find(product => product.id == item.id);

            if(!found) {
                state.activities.push(item);
                this.commit('storeProduct');
            }
        },


        storeItem(state) {
            window.localStorage.setItem('lastProduct', JSON.stringify(state.lastProduct));
            window.localStorage.setItem('viewProducts', JSON.stringify(state.viewProducts));
        },

        addToCart(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            if(found) {
                found.quantity++;
            } else {
                state.cart.push(item);
            }

            this.commit('saveData');
        },


        storeProduct(state) {
            window.localStorage.setItem('activities', JSON.stringify(state.activities));
        },

        productQuantity(state, item) {
            let found = state.cart.find(product => product.id == item.id);
            
            if(found) {
                found.quantity = item.quantity;
            }

            this.commit('saveData');
        },

        saveData(state) {
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);

            this.commit('saveData');
        },

        clearCart(state) {
            state.cart = [];
            state.subTotal = 0;
            state.tax = 0;
            state.total = 0;
            this.commit('saveData');
        },
        
        addToCompare(state, item) {
            let found = state.compare.find(product => product.id == item.id);

            if(!found) {
                state.compare.push(item);
            }
            
            this.commit('storeCompare');
        },

        storeCompare(state) {
            window.localStorage.setItem('compare', JSON.stringify(state.compare));
        },

        removeFromCompare(state, item) {
            let index = state.compare.indexOf(item);
            state.compare.splice(index, 1);

            this.commit('storeCompare');
        },
    }
})