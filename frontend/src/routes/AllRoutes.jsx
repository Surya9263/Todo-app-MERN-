import React from 'react'
import {Route, Routes} from "react-router-dom"
import Signin from '../components/auth/Signin'
import Signup from '../components/auth/Signup'
import Todos from '../components/todos/Todos'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Todos/>} />
        <Route path="signin" element={<Signin/>} />
        <Route path="signup"  element={<Signup/>} />        
    </Routes>
  )
}

export default AllRoutes