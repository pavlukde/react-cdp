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


export const requestSearch = (keyword) => {
    return dispatch => {
            dispatch( {
                type: 'REQUEST_SEARCH'
            });
    }
}

export const receiveSearch = (courses) => {
    return dispatch => {
            dispatch( {
                type: 'RECEIVE_SEARCH',
                courses: courses
            });
    }
}

export function search(keyword) {

    return function(dispatch) {

      dispatch(requestSearch(keyword))
      
      return fetch(`http://localhost:3001/courses?q=${keyword}`)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(courses =>
          dispatch(receiveSearch(courses))
        )
    }
}