import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import GlobalState from "./Context";
import { publicRoutes } from "./routes";
import Notify from "./components/Notify";

const App = () => {
  return (
    <GlobalState>
      <Routes>
        {publicRoutes.map((item, index) => {
          const Page = item.component;
          return <Route key={index} path={item.path} element={
            <>
              <Navbar />
              <Page />
              <Notify />
              <Footer />
            </>
          } />;
        })}
      </Routes>
    </GlobalState>
  );
};

export default App;
