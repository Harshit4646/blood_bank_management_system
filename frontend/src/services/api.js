import axios from "axios";

// ============================================================
// API BASE URL
//
// Local development:
// VITE_API_URL=http://localhost:5000/api
//
// Production:
// VITE_API_URL=https://your-render-backend.onrender.com/api
// ============================================================

const API_BASE_URL =

import.meta.env.VITE_API_URL ||

"http://localhost:5000/api";


const api = axios.create({


baseURL:
    API_BASE_URL

});

// ============================================================
// AUTOMATICALLY ATTACH JWT TOKEN
// ============================================================

api.interceptors.request.use(


(config) => {

    const token =

        localStorage.getItem(
            "token"
        );


    if (token) {

        config.headers.Authorization =

            `Bearer ${token}`;

    }


    return config;

},

(error) => {

    return Promise.reject(
        error
    );

}

);

// ============================================================
// HANDLE AUTHENTICATION FAILURES
// ============================================================

api.interceptors.response.use(

(response) => {

    return response;

},

(error) => {

    if (

        error.response?.status === 401

    ) {

        localStorage.removeItem(
            "token"
        );

        localStorage.removeItem(
            "user"
        );


        window.location.href =
            "/login";

    }


    return Promise.reject(
        error
    );

}

);

export default api;
