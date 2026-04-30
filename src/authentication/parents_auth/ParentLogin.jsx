import React from 'react'
import {Link} from 'react-router-dom'
import "./authentication.css"

const ParentLogin = () => {
  return (
    <div className="form-card">
      <form action="">
        <h4>LogIn Form</h4>
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" required placeholder='Enter Email'/>
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" required placeholder='Enter Password'/>
        <button type='submit'>Submit</button> <p>Don't have an account <Link to="/register">Register</Link> </p>
      </form>
    </div>
  )
}

export default ParentLogin