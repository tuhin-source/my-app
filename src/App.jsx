import React from 'react'
import ParentRegister from './authentication/parents_auth/ParentRegister'
import { BrowserRouter,Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
           <Route path='/' element={<ParentRegister/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App