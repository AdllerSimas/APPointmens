import cookie from 'js-cookie'

// Set in Cookie
export const setCookie = (key, value) => {
    if(window !== 'undefined') {
        cookie.set(key, value, {
            expires: 1
        })
    }
}

// Remove in Cookie
export const removeCookie = key => {
    if(window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        })
    }
}

// Get from cookie like token
export const getCookie = key => {
    if(window !== 'undefined') {
        return cookie.get(key)
    }
}

// Set in localstorage
export const setLocalStorage = (key, value) => {
    if(window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

// Remove from localstorage
export const removeLocalStorage = key => {
    if(window !== 'undefined') {
        localStorage.removeItem(key)
    }
}

// Auth user after login
export const authenticate = (response, next) => {
    setCookie('token', response.data.token)
    setLocalStorage('@APPointments/user', response.data.user)
    next()
}

// Signout
export const signout = next => {
    removeCookie('token')
    removeLocalStorage('@APPointments/user')
}

// Get user info from localstorage
export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = getCookie('token')
        if (cookieChecked) {
            if (localStorage.getItem('@APPointments/user')) {
                return JSON.parse(localStorage.getItem('@APPointments/user'))
            } else {
                return false 
            }
        }
    }
}

// update user data in localstorage
export const updateUser = (response, next) => {
    if (window !== 'undefined') {
        let auth = JSON.parse(localStorage.getItem('@APPointments/user'))
        auth = response.data
        localStorage.setItem('@APPointments/user', JSON.stringify(auth))
    }
    next()
}