import React from 'react'
import './authentication.css'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className="form-card">
      <form action="">
        <h4>Registration Form</h4>
        <label htmlFor="">Name</label>
        <input type="text" name="" id="" required placeholder='Enter Name'/>
        <label htmlFor="">Email</label>
        <input type="email" name="" id="" required placeholder='Enter Email'/>
        <label htmlFor="">Password</label>
        <input type="password" name="" id="" required placeholder='Enter Password'/>
        <button type='submit'>Submit</button> <p>Already have an account <Link to="/login">LogIn</Link></p>
      </form>
    </div>
  )
}
export default Register