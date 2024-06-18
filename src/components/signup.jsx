import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {
  const user =props.user
  const setuser = props.setuser
  const[eusername,setEusername]=useState()
  const[epassword,setEpassword]=useState()
  const nav=useNavigate()

  function handleUInput(evt){
    setEusername(evt.target.value)

  }
  function handleUPassword(evt)
  {
    setEpassword(evt.target.value)

  }
  function Adduser()
  {
    setuser([...user,{username:eusername,password:epassword}])
    nav("/")

  }

    return (
        <div className='bg-black p-10'>
      <div className='bg-white border rounded-md p-10'>
        <h1 className='text-3xl font-bold'>Hey Hi</h1>
        <p>Sign up here;)</p>
        <div className='flex flex-col gap-3 p-1'>
            
            <input className='border rounded-md border-black p-2 w-52' onChange={handleUInput} placeholder="Enter your UserName" type="text"/>
            <input className='border rounded-md border-black p-2 w-52' onChange={handleUPassword} placeholder="Password" type="text"/>
            <input className='border rounded-md border-black p-2 w-52' placeholder="Confirm password" type="text"/>
            <button onClick={Adduser} className='bg-slate-600 p-2 text-black w-20 border rounded-md'>Signup</button>
            <p>Already have an account ? <Link to={"/"} className='underline'>Login</Link></p>
        </div>
      </div>
    </div>
    )
}
export default Signup;