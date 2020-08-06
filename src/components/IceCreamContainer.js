import React from 'react'
import {buyIceCream} from './../redux'
import { connect } from 'react-redux';

const custom = {
  border: '2px solid black',
  width: '100%',
  padding: '20px 20px'
}
const IceCreamContainer = (props) => {
  return (
    <div style={custom}>
      <h1><u>Number of IceCream</u></h1>
      <h2>{props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Sell IceCream</button>
    </div>
  )
}

const mapStateToProps = state=>{
  return{
    numOfIceCream: state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    buyIceCream: ()=>dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
