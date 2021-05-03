import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store"
import AuthHandler from "./components/AuthHandler"
Vue.use(VueRouter);

//different routes inside our application
// vue router sets default to hash router which has #. Only characters right of the hash is considered
// has unintended side effects with # access token etc, doesn't know how interpret

//use browser router, only route after domain is considered update configuration file in vue router
const router = new VueRouter({
    //history tells to use browser router :)
    mode: "history",
    routes: [
        {path: '/oauth2/callback', component: AuthHandler }
    ]
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');