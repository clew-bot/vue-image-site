import qs from "qs";
import axios from "axios";
const CLIENT_ID = 'b2e740e0eee4411';
const ROOT_URL = 'https://api.imgur.com'

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    },
    // token argument is access token needed for bearer
    fetchImages(token) {
        //second param can make headers
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    uploadImages(images, token) {
        // loop over images to upload one at a time
        // takes array like images to real array then call map function to iterate all images over file object
        const promises = Array.from(images).map(image => {
            //form data object from vanilla js
            const formData = new FormData();
            formData.append('image', image)

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })

        return Promise.all(promises)
    }
}