export const login = (state = [], action) => {

  switch (action.type) {
    case 'LOGIN':{
        console.log("LOGIN reducer");
        console.log(action.userName);
      return {
        ...state,
        userName:action.userName,
        isAuthenticated:true
      }
      
    }
    
    default:{
        return state
    }

  }
}