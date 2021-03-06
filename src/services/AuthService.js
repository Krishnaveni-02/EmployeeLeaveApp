/* The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important methods:

login(): POST {username, password} & save JWT to Local Storage
logout(): remove JWT from Local Storage
register(): POST {username, email, password}
getCurrentUser(): get stored user information (including JWT) */

import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api/authenticate/";

class AuthService {
    login(username, password) {
        return axios.post(BASE_API_URL+"signin", {username,password})
        .then(response => {
            if(response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(BASE_API_URL+"signup", {
            username, email, password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();