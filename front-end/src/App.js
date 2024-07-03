import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import GlobalState from "./Context";
import { publicRoutes } from "./routes";
import Notify from "./components/Notify";

const App = () => {
  return (
    <>
      <GlobalState>
      <Navbar />
        <Routes>
          {publicRoutes.map((item, index) => {
            const Page = item.component;
            return <Route key={index} path={item.path} element={<><Page /> <Notify /></>} />;
          })}
        </Routes>
        <Footer />
      </GlobalState>
    </>
  );
};

export default App;
