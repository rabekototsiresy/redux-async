import React,{useEffect,useState  } from 'react'
import {fetchUser} from './../redux'
import {connect} from 'react-redux'


const UsersContainer = ({fetchData,userData}) => {
const [displayUser, setDisplayUser] = useState(null)

  useEffect( ()=>{
    fetchData()
   return userData.loading ? (
    <h2>Loading ...</h2>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : (
    <div>
      <h1>List User</h1>
      <div>
      {
       userData && userData.map( user=><p>{user.name}</p>) 
      }
      </div>
    </div>
  )
  },[])

 
  return (
    <div>
      <h1>User</h1>
      {displayUser}
    </div>
  )
}


const mapStateToProps = state=>{
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    fetchData: ()=>dispatch(fetchUser())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)
