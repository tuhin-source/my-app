import React from 'react'
import Register from './authentication/Register'
import Login from './authentication/Login'
import { BrowserRouter,Routes, Route } from 'react-router'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
           <Route path='/register' element={<Register/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App