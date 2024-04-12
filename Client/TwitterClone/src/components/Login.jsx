import React, { useState } from "react";
import axios from "axios"
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { getUsers } from "./redux/userSlice";
// import cookie from require("js-cookies");
function Login() {
  const [isLogin, setIsLogin]= useState(true)
  const [name, setName]= useState("")
  const [userName, setUserName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler= async(e)=>{
    e.preventDefault();
    if(isLogin){
      // login
      try{
        // axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password},{
          // headers:{
          //   'Content-Type':"application/json"
          // },
          // withCredentials:true,
        })
        console.log(res)
        dispatch(getUsers(res?.data?.user))
        if(res.data.success){
          navigate("/")
          toast.success(res.data.message)
        }
  
      }
      catch(err){
        console.log(err)
        toast.success(err.response.data.message)
      }
      }
    
    else {
      try{
        // const cookies  = new cookies();
        
        const res = await axios.post(`${USER_API_END_POINT}/register`, {name, userName, email, password},{
        
        // headers:{
        //   "Content-Type":"application/json"
        // },
        // withCredentials:true,
      
        })
        console.log(res)
        if(res.data.success){
          setIsLogin(true)
          toast.success(res.data.message)
          // navigate("/")
        }
      }
      catch(err){
         console.log(err)
         toast.success(err.response.data.message)

      }
    }
  }

  const loginSignUphandler = ()=>{
    setIsLogin(!isLogin)
  }
  return (
    <div className="w-screen h-screen flex items-center justify-between">
      <div className="flex items-center justify-evenly w-[80%]">
        <div className=" ">
          <img
            className="ml-2" width={"300px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGLEVQwlV8yr1zrmZeKhP0NqSsUpywXL9uj8cQSVZ7JhC95MTCMcmBI30pPuzcpnR2YoI&usqp=CAU"
            
            alt=""
          />
        </div>
        <div>
          <div className="my-5">
            <h1 className="font-bold text-6xl ">Happening now</h1>
          </div>
          <h1 className="mt-4 mb-2 text-2xl font-bold">{isLogin?"Login":"Signup" }</h1>
          <form onSubmit={submitHandler} action="" className="flex flex-col w-[60%]">
            {
              !isLogin &&(<><input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="outline-blue-800 border border-gray-200 px-3 py-1 rounded-full my-1" />
              <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}  placeholder="UserName"  className="outline-blue-800 border border-gray-200 px-3 py-1 rounded-full my-1" /> </>)
            }
            
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Email"   className="outline-blue-800 border border-gray-200 px-3 py-1 rounded-full my-1 "/>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Password"  className="outline-blue-800 border border-gray-200 px-3 py-1 rounded-full my-1"/>
            <button className="py-1 bg-[#1D9BF0] border-none rounded-full text-lg text-white my-4 ">{isLogin?"Login":"Create Account" }</button>
            <h1>{isLogin? "Do not have an account ?": "Already have an account ?"} <span onClick={loginSignUphandler} className="font-bold cursor-pointer text-blue-600" >{isLogin? "Signup":"Login"}</span></h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
