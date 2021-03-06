export const login_logout = (state = [], action) => {

  switch (action.type) {
    case 'LOGIN':{
      return {
        ...state,
        userName:action.userName,
        isAuthenticated:true
      }
    }
    
    case 'LOGOUT':{
      return {
        ...state,
        userName:null,
        isAuthenticated:false
      }
    }

    default:{
        return state
    }

  }
}