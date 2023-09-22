import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Shop from "./pages/Shop";

const App = () => {
  return (
      <section className="w-full min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Service" element={<Service />}/>
          <Route path="/Contact" element={<Contact/> }/>
          <Route path="/Shop" element={<Shop />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Booking" element={<Booking/>}/>
          </Routes>
        </main>
        <Footer />
      </section>
  );
};

export default App;
