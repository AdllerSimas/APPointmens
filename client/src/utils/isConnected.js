import cookie from 'js-cookie'

const isAuth = () => {
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

// Get from cookie like token
export const getCookie = key => {
    if(window !== 'undefined') {
        return cookie.get(key)
    }
}

const isConnected = isAuth()

export default isConnected