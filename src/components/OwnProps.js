import React from 'react'
import { connect } from 'react-redux';
import { addCake, buyCake } from '../redux'

const OwnProps = (props) => {
 console.log(props.action)
  return (
    <div>
      <h1>{props.item}</h1>
      <button onClick={props.action}>Add cake</button>
    </div>
  )
}

const mapStateToProps = (state,ownProps)=>{
  const item = ownProps.produit ? 'AVAILABLE PRODUCT' : 'EMPTY'
  return {
    item
  }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
  const action = ownProps.action  ? ()=>dispatch(addCake()) : ()=>dispatch(buyCake(2))
  return{
    action: action
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OwnProps)
