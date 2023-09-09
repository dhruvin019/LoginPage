import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const Template = ({title,dec1,dec2,image,formtype,setIsLoggedIn}) => {
  return (
    <div className='formmain'>
      <div className='tem1'>
            <h1 className='formtitle'>{title}</h1>
            <p>
                <div className='dec1'>{dec1}</div>
                
                <div className='dec2'>{dec2}</div>
            </p>

            {formtype === "signup"?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm  setIsLoggedIn={setIsLoggedIn}/>)}

            

        </div>

      <div >
        <div className='img'>
        <p ><img className='img1' src='https://media.istockphoto.com/id/1194009130/vector/abstract-vector-white-background.jpg?s=612x612&w=0&k=20&c=k_GbYkriXPJl3rWR-IcxsBBhjc3h3kx5LSzT6nXx9JI='/></p>

        <p ><img className='img2' src={image}/></p>

        </div>
      </div>

    </div>

  );
};

export default Template;
