import history from '../history'

export const login = (userName) => {
    return dispatch => {
            console.log("Login Action");
            history.push('/courses');
            dispatch( {
                type: 'LOGIN',
                userName: userName 
            });
    }
}

export const logout = () => {
    return dispatch => {
            console.log("Logout Action");
            history.push('/login');
            dispatch( {
                type: 'LOGOUT'
            });
    }
}