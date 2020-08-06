// ACTION CREATOR
import { BUY_CAKE,ADD_CAKE } from './cakeTypes';

export const buyCake = (cost)=>{
  return{
    type: BUY_CAKE,
    payload: cost
  }
}
export const addCake = ()=>{
  return{
    type: ADD_CAKE
  }
}