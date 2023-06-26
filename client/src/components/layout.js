import React from "react";

const Layout = ({children}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">{children}</div>
      </div>
    </section>
  );
};

export default Layout;
