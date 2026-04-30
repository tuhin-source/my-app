import React from 'react'
import "./parent.css"

const ParentRegister = () => {
  return (
    <div className="form-card-wrapper">
        <div className="form-card">

          <div className="left">
              <img src="/parent_page.png" alt="Welcome" />
          </div>

          <div className="right">

              <form action="">

                  <h4>Registration Form</h4>

                  <label htmlFor="">Name</label>
                  <input type="text" placeholder='Enter Name' required/>

                  <label htmlFor="" >Email</label>
                  <input type="email" placeholder='Enter Name' required/>

                  <label htmlFor="">Password</label>
                  <input type="password" placeholder='Enter Name' required/>

                  <button type='submit'>Get Started </button>
                  
              </form>
          </div>

      </div>
    </div>
  )
}
export default ParentRegister