import React from 'react'
import Template from './Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    dec1="Build skill for today,tomorrow, and beyond"
    dec2="Education to future-proof your carrer"
    image="https://img.pikbest.com/origin/06/59/72/84kpIkbEsTG84.jpg!w700wp"
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}/>
    
  )
}

export default Login
