import Navbar from './component/Navbar';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Dashboard from './component/Dashboard';

import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

 
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  return (
   <div className='main'>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
   </div>
   
  );
}

export default App;
