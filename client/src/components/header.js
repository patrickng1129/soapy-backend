import React, { useState } from "react";

const Header = () => {
  const logoStyle = { maxHeight: "70px" };
  const spanStyle = { margin: "5px" };
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="navbar has-shadow is-white">
      <div className="navbar-brand pl-3">
        <a className="navbar-item">
          <img
            src={process.env.PUBLIC_URL + "/pig.png"}
            alt="A Picture of Soapy"
            style={logoStyle}
            className="py-2 px-2"
          />
        </a>
        <a
          className={isClicked ? "navbar-burger" : "navbar-burger is-active"}
          id="burger"
          onClick={() => setIsClicked(!isClicked)}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>

      <div
        className={isClicked ? "navbar-menu" : "navbar-menu is-active"}
        id="nav-links"
      >
        <div className="navbar-end">
          <a className="navbar-item pr-6">Check-in</a>
          <a className="navbar-item pr-6">History</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
