import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({
  isHomePage = true,
  setSelectedProfile,
  setAuthenticated,
}) => {
  const navigate = useNavigate();
  const logoStyle = { maxHeight: "70px" };
  const [isClicked, setIsClicked] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("lastAuthenticated");
    localStorage.removeItem("selectedProfile");
    setSelectedProfile("");
    setAuthenticated("");

    navigate("/");
  };

  return (
    <nav className="navbar has-shadow is-white">
      <div className="navbar-brand pl-3">
        <a className="navbar-item" onClick={() => navigate('/home')}>
          {/* <img
            src={process.env.PUBLIC_URL + "/pig.png"}
            alt="A Picture of Soapy"
            style={logoStyle}
            className="py-2 px-2"
          /> */}
          Hello
        </a>
        {isHomePage ? (
          <a
            className={isClicked ? "navbar-burger" : "navbar-burger is-active"}
            id="burger"
            onClick={() => setIsClicked(!isClicked)}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        ) : null}
      </div>
      {isHomePage ? (
        <div
          className={isClicked ? "navbar-menu" : "navbar-menu is-active"}
          id="nav-links"
        >
          <div className="navbar-end">
            <a className="navbar-item pr-6">Check-in</a>
            <a className="navbar-item pr-6">History</a>
            <a className="navbar-item pr-6" onClick={handleLogOut}>
              Log out
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Header;
