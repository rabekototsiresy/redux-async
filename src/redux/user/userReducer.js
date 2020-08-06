import {
  USER_FETCH_FAILURE,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS
} from './userType';

const initialState = {
  loading: true,
  user: [],
  error: ''
}
export const userReducer = (state=initialState, action)=>{
  switch(action.type){
    case USER_FETCH_REQUEST: 
      return{
        ...state,
        loading: true
      }
    case USER_FETCH_SUCCESS: 
      return{
        ...state,
        loading: false,
        user : action.payload
      }
    case USER_FETCH_FAILURE: 
      return{
        ...state,
        loading: false,
        user: action.payload
      }
    default: 
      return state;
  }
}