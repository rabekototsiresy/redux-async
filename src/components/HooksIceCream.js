import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {buyIceCream} from './../redux'


const custom = {
  border: '2px solid black',
  width: '100%',
  padding: '20px 20px'
}


const HooksIceCream = () => {
  const numOfIceCream = useSelector( state=>state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
   
      <div style={custom}>
      <h1>HOOKS</h1>
      <h1><u>Number of IceCream</u></h1>
      <h2>{numOfIceCream}</h2>
      <button onClick={()=>dispatch(buyIceCream())} >Sell IceCream</button>
    </div>
 
  )
}

export default HooksIceCream
