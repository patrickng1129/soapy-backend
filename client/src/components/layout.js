import React from "react";
import Header from "./header";
const Layout = ({ children, setAuthenticated, setSelectedProfile }) => {
  return (
    <>
      <Header
        setAuthenticated={setAuthenticated}
        setSelectedProfile={setSelectedProfile}
      />
      <section className="section">
        <div className="container">
          <div className="columns">{children}</div>
        </div>
      </section>
    </>
  );
};

export default Layout;
