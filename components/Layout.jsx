import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
