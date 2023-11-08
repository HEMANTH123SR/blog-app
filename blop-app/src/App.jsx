import { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth";
import { login ,logout} from "./store/authSlice";

const App=()=>{

const [loading,setLOading]=useState(true);
const dispatch=useDispatch();

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
  if(userData){
dispatch(login({userData}))
  }else{
dispatch(logout())
  }
  })
  .finally(()=>{
    setLOading(false)
  })
},[])

  return loading ? (<>
  <h1>loading</h1>
  </>) : (<>hello user</>);
}

export default App;