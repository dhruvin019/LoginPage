import React, { useState } from 'react'
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) =>{

    const navigate= useNavigate();

   const[formDate,setFormDate] = useState({
    email:"",password:""
   })

   const [showPassword, setShowPassword] = useState(false);

   function changeHandler(event){
    setFormDate((prevdata) => (
        {
            ...prevdata,
            [event.target.name]:event.target.value
        }
    ));
   }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form className='form' onSubmit={submitHandler} >
        <label>
            <p className='title'> 
                Email Address<sup>*</sup>
            </p>
            <input className='input'
                required
                type="email"
                name="email"
                value={formDate.email}
                onChange={changeHandler}
                placeholder="Enter email id"
            />
        </label>
        
        <label className='label'>
            <p className='title'> 
                Password<sup>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                value={formDate.password}
                onChange={changeHandler}
                placeholder="Enter Password"
            />

            <span className='icon' onClick={() => setShowPassword((prev) => !prev)} >
            {showPassword ? <AiFillEyeInvisible /> : <AiOutlineEye />}
            </span>

            <Link to="#">
            <p className='forgotpassword'>
                Forgot Password
            </p>
                </Link>
        </label>


        <button className='formbtn'>
            Sign In
        </button>

        <div className='line'>
                <div className='lineSub'>.</div>
                    <p className='or'>OR</p>
                <div className='lineSub'>.</div>
        </div>

        <button className='formbtn2'>Sign in with Google</button>
    </form>
  )
}

export default LoginForm
