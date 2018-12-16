export const courses = (state = [], action) => {

  switch (action.type) {
    case 'RECEIVE_SEARCH':{
      return {
        ...state,
        data:action.courses
      }
    }

    default:{
        return state
    }

  }
}