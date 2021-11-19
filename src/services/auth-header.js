// We also have methods for retrieving data from server. In the case we access protected resources, the HTTP request needs Authorization header.

// Let’s create a helper function called authHeader() inside auth-header.js:

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken};
    } else {
        return {};
    }
}

