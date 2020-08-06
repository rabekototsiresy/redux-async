import { BUY_CAKE,ADD_CAKE } from './cakeTypes';

const initalState = {
  numOfCakes: 20,
  price: 1000,
  sell: 0
}
const cakeReducer = (state=initalState ,action)=>{
  switch(action.type){
    case BUY_CAKE: 
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
        price: state.price * (21 - state.numOfCakes)
      }
      case ADD_CAKE: 
        return{
          ...state,
          numOfCakes: state.numOfCakes + 2
        }
    default: 
      return state
  }
}
export default cakeReducer