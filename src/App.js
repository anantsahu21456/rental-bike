// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home.jsx';
import RentalDeals from './components/Rentaldeals.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import SignUp from './components/Signup.jsx';
import SignIn from './components/Signin.jsx';
import Herosection from './components/Herosection.jsx';
import Searchbar from './components/Searchbar.jsx';
import Bikesection from './components/Bikesection.jsx';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Herosection/>
      <Searchbar/>
      <Bikesection/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/rentaldeals" element={<RentalDeals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
