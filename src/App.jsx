import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";  
import Contact from "./components/Contact";  


function App() {
  return (
    <>
       {/* Add Navbar here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element= "Page not found" />

      </Routes>
    </>
  );
}

export default App;
