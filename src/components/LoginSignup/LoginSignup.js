import React, { useState } from 'react'
import './LoginSignup.css'


export default function LoginSignup() {

    const[action, setAction] = useState('Sign Up');
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        
        </div>
        <div className='inputs'>
            {action === "Login" ?<div></div> : <div className='input'>
                <img src="/assets/person.png"  width="32" height="32" alt='' className='icon' />
                <input type='text' placeholder='Name'/>
            </div>}
            
        
        <div className='input'>
                <img src="/assets/email.png"  width="32" height="32" alt='' className='icon' />
                <input type='email' placeholder='Email Id'/>
            </div>
            <div className='input'>
                <img src="/assets/password.png"  width="32" height="32" alt='' className='icon' />
                <input type='password' placeholder='Password'/>
            </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>}
            <div className='submit-container'>
                <div className={action ==="Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className= {action ==="Sign Up" ? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

    </div> 
  )
}
