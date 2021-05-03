import api from '../../api/imgur'
import qs from "qs"
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
        console.log("query: ", query)
        commit('setToken', query.access_token);
        window.localStorage.setItem("imgur_token", query.access_token)

    },
    //commit is a function to call the mutation
    logout: ({ commit }) => {
        commit('setToken', null);
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