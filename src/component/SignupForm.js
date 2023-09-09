import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai'
const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        setpassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType,setAccountType] = useState("student")


    function changeHandler(event){
        setFormData((prevdata)=>(
            {
                ...prevdata,
                [event.target.name]:event.target.value
            }
        ));
       }

    function submithandler(event){
        event.preventDefault();
        if(formData.password != formData.setpassword) {
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("./Dashboard");
        
        const accountData = {
            ...formData
        };
        console.log("printing accountData");
        console.log(accountData);
    }

  return (
    <div>
      <div className='box'>
        <button onClick={() => setAccountType("student")} 
        className={accountType === "student" ? 'box1 a' : 'box1'}>
        Student
        </button>
        <button onClick={() => setAccountType("instructor")} 
        className={accountType === "instructor" ? 'box1 a' : 'box1'}>
            Instructor
        </button>
      </div>

      <form className='form' onSubmit={submithandler}>
        <div className='formdetail'>

        <label>
            <p className='title'>First Name<sup>*</sup></p>
            <input className='input a'
            required
            type="text"
            name="firstname"
            onChange={changeHandler}
            placeholder="Enter First Name"
            value={formData.firstname}
            />
        </label>
        
        <div className='empty'></div>

        <label>
            <p className='title'> Last Name<sup>*</sup></p>
            <input className='input a'
            required
            type="text"
            name="lastname"
            onChange={changeHandler}
            placeholder="Enter First Name"
            value={formData.lastname}
            />
        </label>

        </div> 
        <label>
            <p className='title'>Email Address<sup>*</sup></p>
            <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email"
            value={formData.email}
            />
        </label>

        <div className='formdetail'>
        <label>
            <p className='title'> 
                Create Password<sup>*</sup>
            </p>
            <input className='input a'
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
            />

            <span className='icon2' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiFillEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            
        </label>

        <label>
            <p className='title'> 
                Confirm Password<sup>*</sup>
            </p>
            <input className='input a'
                required
                type={showconfirmPassword ? ("text") : ("password")}
                name="setpassword"
                value={formData.setpassword}
                onChange={changeHandler}
                placeholder="Enter Confirm Password"
            />

            <span className='icon2' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showconfirmPassword ? (<AiFillEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

           
        </label>
        </div>

        <button className='formbtn'>Create Account</button>

        <div className='line'>
                <div className='lineSub'>.</div>
                    <p className='or'>OR</p>
                <div className='lineSub'>.</div>
        </div>

        <button className='formbtn2'>Sign in with Google</button>
      </form>
    </div>
  )
}

export default SignupForm
