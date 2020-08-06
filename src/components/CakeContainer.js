import React from 'react';
import { buyCake, buyIceCream } from '../redux';
import { connect } from 'react-redux';
import store from './../redux/store'



const CakeContainer = (props) => {

  return (
    <div>

      <h1>Number of Ice Cream {props.numOfIceCream} </h1>
      <button onClick={props.buyIceCream}>buy IceCream</button>
      <h1>Number of Cakes -{props.numOfCakes} </h1>
      <h1>price: {props.price}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state=>{
  return{
    numOfCakes: state.cake.numOfCakes,
    price: state.cake.price,
    numOfIceCream: state.iceCream.numOfIceCream
  }
}


const mapDispatchToProps = dispatch=>{
  return{
    buyCake: ()=>dispatch(buyCake(5)),
    buyIceCream: ()=>dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)
 
