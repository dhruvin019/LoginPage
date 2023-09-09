import React from 'react'
import {Link} from "react-router-dom"
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='navbar'>
      <Link to="/">
        <img className='logo' src='https://th.bing.com/th/id/OIP.4dcJ_AHTJ81dikKbJ_xBtgHaGw?w=218&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7' />
      </Link>

      <nav>
        <ul className='sub_nav'>
            <li>
                <Link className='sub_nav a' to="/">Home</Link>
            </li>
            <li>
                <Link className='sub_nav a' to="/">About</Link>
            </li>
            <li>
                <Link className='sub_nav a' to="/">Contact</Link>
            </li>
        </ul>
      </nav>

      <div>
        {!isLoggedIn &&
            <Link  to="/login">
                <button className='btn'>
                    Login
                </button>
            </Link>
        }
        {!isLoggedIn &&
            <Link to="/signup">
                <button className='btn'>
                    Sign Up
                </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to="/">
                <button className='btn' onClick={() =>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out");
                }}>
                    Log Out
                </button>
            </Link>
        }
        {isLoggedIn &&
            <Link to="/dashboard">
                <button className='btn'>
                    DashBoard
                </button>
            </Link>
        }
      </div>
    </div>
  )
}

export default Navbar
