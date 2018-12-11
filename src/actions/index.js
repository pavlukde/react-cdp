import history from '../history'

export const login = (userName) => {
    return dispatch => {
       // ApiCall().then((res) => {
            history.push('/courses');
            console.log('Login action');
            console.log(userName);
            dispatch( {
                type: 'LOGIN',
                userName: userName 
            });
        //})
    }
}
