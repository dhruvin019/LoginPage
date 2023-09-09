import React from 'react'
import Template from './Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Join StudyNotion"
    dec1="Build skill for today,tomorrow, and beyond"
    dec2="Education to future-proof your carrer"
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfApKz6zyW4U9L8AolhxHLQDx5Uw3RDl1aIB-pIcdC29skTGVY41ZWSqzhxI5ymkUSrs&usqp=CAU"}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}/>
  )
}

export default Signup
