import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalState from "./Context";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <GlobalState>
        <section className="">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Booking" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </section>
      </GlobalState>
    </>
  );
};

export default App;
