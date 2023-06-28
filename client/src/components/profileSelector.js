import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const ProfileSelector = ({
  handleProfileSelect,
  authenticated,
  selectedProfile,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated && !!selectedProfile) {
      console.log(authenticated);
      navigate("/home");
    }
  }, [authenticated, selectedProfile, navigate]);

  return (
    <>
      <Header isHomePage={false} />
      <div className="container ">
        <section
          className="section is-size-1 py-1"
          style={{ textAlign: "center" }}
        >
          Welcome
        </section>
        <section
          className="section is-size-3 pb-6 pt-1"
          style={{ textAlign: "center" }}
        >
          Please Select an Option
        </section>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-3">
            <div
              className="box"
              style={{ cursor: "pointer" }}
              onClick={() => handleProfileSelect("Soapy")}
            >
              {/* <figure className="image is-256x256">
                <img src={`${process.env.PUBLIC_URL}/ppp.jpeg`} />
              </figure> */}
              <div style={{ textAlign: "center" }}>I'm Gangplank</div>
            </div>
          </div>
          <div className="column is-3">
            <div
              className="box"
              style={{ cursor: "pointer" }}
              onClick={() => handleProfileSelect("Strawberry")}
            >
              {/* <figure className="image is-256x256">
                <img src={`${process.env.PUBLIC_URL}/ppa.jpeg`} />
              </figure> */}
              <div style={{ textAlign: "center" }}>I'm Kassadin</div>
            </div>
          </div>
          <div className="column is-3"></div>
        </div>
      </div>
    </>
  );
};

export default ProfileSelector;
