import api from '../../api/imgur'
import qs from "qs"
//importing router to use users
import { router } from '../../main';

const state = {
    token: window.localStorage.getItem("imgur_token")
}

const getters = {
    isLoggedIn: (state) => 
        //get boolean of yes we are logged in or no we are not 
        !!state.token
    
}

const actions = {
    login: () => {
        api.login();
    },
    //first argument is helper with a bunch of helper methods
    finalizeLogin({commit}, hash) {
        const query = qs.parse(hash.replace('#', ''));

        commit('setToken', query.access_token);
        window.localStorage.setItem("imgur_token", query.access_token)
        // using the router to get the home page
        router.push('/');
    },
    //commit is a function to call the mutation
    logout: ({ commit }) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token')
    }
}

const mutations = {
    // one additional first argument which is the state
    setToken: (state, token) => {
        state.token = token;
    }
}



export default {
    state, getters, actions, mutations
}