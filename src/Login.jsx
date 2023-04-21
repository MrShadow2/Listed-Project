import React from 'react'
import { Route ,BrowserRouter as Router, Routes } from "react-router-dom";
import App from './App'
import Home from './Home';
const Login = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    </Router>
  )
}

export default Login