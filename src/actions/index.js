import axios from 'axios';


export const increment = () =>{
    return {
        type:'INCREMENT'
    }
}

export const click = () =>{
    return{
        type:'PRESS_BUTTON'
    }
}

export const color_dark = () =>{
    return{
        type:'CHANGE_COLOR_DARK'
    }
}
export const color_light = () =>{
    return{
        type:'CHANGE_COLOR_LIGHT'
    }
}

export const decorate = () =>{
  return{
      type:'DECORATE_ON_OFF'
  }
}

export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUsersRequest())
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          // response.data is the users
          const users = response.data
          dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
          // error.message is the error message
          dispatch(fetchUsersFailure(error.message))
        })
    }
  }
  
  export const fetchUsersRequest = () => {
    return {
      type: 'FETCH_USERS_REQUEST'
    }
  }
  
  export const fetchUsersSuccess = users => {
    return {
        
            type: 'FETCH_USERS_SUCCESS',
            payload: users
      
    
    }
  }
  
  export const fetchUsersFailure = error => {
    return {
      type: 'FETCH_USERS_FAILURE',
      payload: error
    }
  }


