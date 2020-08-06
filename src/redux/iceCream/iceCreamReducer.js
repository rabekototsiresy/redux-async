import { BUY_ICE_CREAM } from './iceCreamType';



const initialState = {
  numOfIceCream: 50
}
export const iceCreamReducer = (state=initialState, action)=>{
  switch(action.type){
    case BUY_ICE_CREAM: 
      return{
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      }
    default: 
      return state;
  }
}