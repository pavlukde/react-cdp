import history from '../history'

export const login = (userName) => {
    return dispatch => {
            history.push('/courses');
            dispatch( {
                type: 'LOGIN',
                userName: userName 
            });
    }
}

export const logout = () => {
    return dispatch => {
            history.push('/login');
            dispatch( {
                type: 'LOGOUT'
            });
    }
}


export const requestAdd = (payload) => {

    return function(dispatch) {
      
        return fetch(`http://localhost:3001/courses/`, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {"Content-Type" : "application/json"}
          })
          .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
          )
          .then(() =>
            dispatch(requestSearch(""))
          )
      }
}

export const requestDelete = (id) => {
    return function(dispatch) {
      
        return fetch(`http://localhost:3001/courses/${id}`, {
            method: 'DELETE'
          })
          .then(
            response => response.json(),
            error => console.log('An error occurred.', error)
          )
          .then(() =>
            dispatch(requestSearch(""))
          )
      }
}




export function requestSearch(keyword) {

    return function(dispatch) {
      
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

export const receiveSearch = (courses) => {
    return dispatch => {
            history.push('/courses');
            dispatch( {
                type: 'RECEIVE_SEARCH',
                courses: courses
            });
    }
}