import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../../pages/Home'
import Doctors from '../../pages/Doctor/Doctors'
import DoctorDetails from '../../pages/Doctor/DoctorDetails'
import Login from "../../pages/Login"
import Signup from "../../pages/Signup"
import Contact from '../../pages/Contact'
import Services from '../../pages/Service'
const Routers = () => {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Doctors />} />
        <Route path="/login" element={<DoctorDetails/>} />
        <Route path="/register" element={<Login/>} />
        <Route path="/profile" element={<Signup />} />
        <Route path="/profile/:id" element={<Contact />} />
        <Route path="/services" element={<Services/>}/>

     </Routes>
  )
}

export default Routers