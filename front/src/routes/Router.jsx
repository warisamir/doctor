
import {Route,Routes} from 'react-router-dom';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctor/DoctorDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Home from '../pages/Home';

const Router = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/doctors/:id" element={<DoctorDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Service />} />
    
  </Routes>
}

export default Router