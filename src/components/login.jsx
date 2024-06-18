import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const[eusername,setEusername]=useState()
  const[epassword,setEpassword]=useState()
  const[ruser,setruser]=useState(true)
  const nav = useNavigate()
  const user=props.user

  function handleUInput(evt){
    setEusername(evt.target.value)

  }
  function handleUPassword(evt)
  {
    setEpassword(evt.target.value)

  
  }
  var userfound=false
  function checkUser() {
    user.forEach(function(item)
  {
    if(item.username === eusername && item.password === epassword)
      {
        console.log("Login Successfully")
        userfound=true
        nav("./landing",{state:{user:eusername}})

      }
  })
  if (userfound===false)
    {
      console.log("login fail")
      setruser(false)
    }


  }
  return (
    <div className='bg-black p-10'>
      <div className='bg-white border rounded-md p-10'>
        <h1 className='text-3xl font-bold'>Hey Hi</h1>
        {ruser? <p>Login here to manage the Activities;)</p>:<p className='text-red-600'>Please Sign Up to login</p>}
        <div className='flex flex-col gap-3 p-1'>
          <input className='border rounded-md border-black p-2 w-52' onChange={handleUInput} placeholder="Enter your UserName" type="text" />
          <input className='border rounded-md border-black p-2 w-52' onChange={handleUPassword} placeholder="Password" type="text" />
          <button className='bg-green-500 p-2 text-black w-20 border rounded-md' onClick={checkUser}>Login</button>
          <p>I didn't have an account? <Link to={"/signup"} className='underline'>Signup</Link></p>
        </div>
      </div>
    </div>
  )
}
export default Login;