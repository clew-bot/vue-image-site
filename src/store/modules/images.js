import api from '../../api/imgur'
import { router } from "../../main"

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    // put any complicated business into actions
    //rootstate is a reference to all of the state that is held in the vuex state, allows us to access from other modules, has different properties
    async fetchImages({ rootState, commit }) {
        //destructure token out of rootState
        const { token } = rootState.auth;
        const response = await api.fetchImages(token);
        commit('setImages', response.data.data)
    },
    async uploadImages({ rootState }, images) {
        // get access token 
        // call imgur api and accept list of images
        // upload process will be in imgur which handles imgur api stuff
        // redirect our user to image list component, then they see list of images appear
        const { token } = rootState.auth;
        await api.uploadImages(images, token); 
        router.push('/')
    
    }
    
};

const mutations = {
    //first argument is always state object
    setImages: (state, images) => {
        state.images = images
    }
};

export default { state,getters,actions,mutations};