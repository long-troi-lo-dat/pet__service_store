import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GlobalState from "./Context";
import { publicRoutes } from "./routes";

// const Home = React.lazy(() => import("./pages/home"));
// const HomeAdmin = React.lazy(() => import("./admin/home"));
// const ProductList = React.lazy(() => import("./admin/product/list"));

const App = () => {
  return (
    <>
      <GlobalState>
        <section className="">
          {/* <Navbar/> */}
          <main className="w-full">
            <Routes>
              {publicRoutes.map((item, index) => {
                const Page = item.component;
                return <Route key={index} path={item.path} element={<Page />} />;
              })}
            </Routes>
          </main>
          <Footer />
        </section>
      </GlobalState>
    </>
  );
};

export default App;
