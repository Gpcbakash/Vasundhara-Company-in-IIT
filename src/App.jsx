import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";  
import Contact from "./components/Contact";  
import { Navbar } from "@material-tailwind/react";


function App() {
  return (
    <>
       {/* Add Navbar here */}
       <Navbar/>

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
