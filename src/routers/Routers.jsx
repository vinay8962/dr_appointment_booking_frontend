import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Doctor from "../pages/Doctor";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";
import MyProfile from "../pages/MyProfile";
import MyAppointment from "../pages/MyAppointment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Appointment from "../pages/Appointment";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/doctors/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routers;
