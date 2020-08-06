import React from 'react'
import { buyCake,buyIceCream } from './../redux'
import { useSelector,useDispatch } from 'react-redux';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector( state=>state.cake.numOfCakes)
  const numOfIceCream = useSelector( state=>state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Num of Ice Cream <b>{numOfIceCream}</b></h1>
      <button onClick={()=>dispatch(buyIceCream())}>buy Ice Cream</button>

      <h1>Num of Cakes -  {numOfCakes}</h1>
      <button onClick={()=>dispatch(buyCake(5))}>buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
