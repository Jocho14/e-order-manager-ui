import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

import "./styles.scss";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
