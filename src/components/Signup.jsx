import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      <div>
        <div>
        <h1>wellcome to rental bike</h1>
        <div>
            <button>Login</button>
            <button>Register</button>
        </div>
        <p>please enter your all the details carefully</p>
        </div>
        <div>
            <input type="text" placeholder='first name' />
            <input type="text" placeholder='last name'/>
            <input type="email" placeholder='email name'/>
            <input type="number" placeholder='Phone Number'/>
            <input type="password" placeholder='Password'/>
            <input type="Password" placeholder='Confirm Password'/>
        </div>
        <div>
            <input type="checkbox" />
            <p>term & condition </p>
            <button>Register</button>
            <p>already have an account ? <Link to ='./Signin.jsx'>Login</Link></p>
            <p>or sign up with </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
