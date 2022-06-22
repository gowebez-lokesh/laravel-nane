import axios from 'axios';

// const token = localStorage.getItem('token');
const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            // "Authorization" : `Bearer ${token && token}`
  }
const loginEndPoint = "api/login";
const registerEndPoint = "api/register";

/*Start: login api
===================================*/
export const loginAuth = async(data) => {
    try {
        const response = await axios.post(loginEndPoint,data, headers)
        return response
    }
    catch(error) {
        return error;
    }
}

/*End: login api
===================================*/
/*Start: register api
===================================*/
export const registerAPI = async(data) => {
    try {
        const response = await axios.post(registerEndPoint , data , headers)
        return response
    }
    catch(error) {
        return error;
    }
}

/*End: register api
===================================*/