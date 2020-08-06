import React,{useState} from 'react'
import{ useSelector,useDispatch} from 'react-redux';
import { buyCake } from '../redux';
const NewCakeContainer = () => {
  const [number, setNumber] = useState(1)
  const numOfCake = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>BUY CAKE - {numOfCake}</h1>
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>dispatch(buyCake(number))}>Buy cake {number}</button>
    </div>
  )
}

export default NewCakeContainer
