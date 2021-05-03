import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth"
// connection between two libraries
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth
    }
});