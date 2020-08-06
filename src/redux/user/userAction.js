import axios from 'axios';
import {
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS
} from './userType';

export const fetchUserRequest = ()=>{
  return{
    type: USER_FETCH_REQUEST
  }
}
export const fetchUserSuccess = user=>{
  return{
    type: USER_FETCH_SUCCESS,
    payload: user
  }
}

export const fetchUserFailure = error=>{
  return{
    type: USER_FETCH_FAILURE,
    payload: error
  }
}


export const fetchUser = ()=>{
  return (dispatch)=>{
    dispatch(fetchUserRequest)
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( response =>{
      let users = response.data
      dispatch(fetchUserSuccess(users))
    })
    .catch( error=>{
      let errorMess = error.message
      dispatch(fetchUserFailure(errorMess))
    })

  }
}