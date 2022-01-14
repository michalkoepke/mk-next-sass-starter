import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div style={{ marginTop: "0px" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
