import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faSquareCheck,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import "./card.css";

const Card = ({ data }) => {
  const retrieveImage = (id) => {
    if (id === "60d5ecb44b492bd0600c5896") {
      return `${process.env.PUBLIC_URL}/pig-A.png`;
    } else {
      return `${process.env.PUBLIC_URL}/pig-B.png`;
    }
  };

  const retrieveUser = (id) => {
    if (id === "60d5ecb44b492bd0600c5896") {
      return `Kassadin`;
    } else {
      return `Gangplank`;
    }
  };
  const contentStyle = {
    display: "flex",
    flexDirection: "row",
  };
  const commentUsernameContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  return (
    <div className="column is-8">
      <div
        className="box"
        id="box-content"
        style={{ display: "flex", flexDirection: "row", justifyContent:'space-around' ,minWidth:'50vw' }}
      >
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={retrieveImage(data.addedBy)} />
            </figure>
          </div>
          <div>
            <div className="content" style={contentStyle}>
              <p>{`${retrieveUser(data.addedBy)}  ${data.destinationName}" commodo."`}</p>
            </div>
            {/* TO BE REFACTORED */}
            <div className="box">
              <div style={commentUsernameContainer}>
                <figure className="image is-32x32">
                  <img src={retrieveImage(data.memos[0].writtenBy)} />
                </figure>
                <div className="pl-2">
                  {retrieveUser(data.memos[0].writtenBy)} said
                </div>
              </div>
              <div className="pl-1">{data.memos[0].text}</div>
            </div> 
            {/* END OF REFACTOR */}
          </div>
        </div>
        <div
          className="media-right"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <FontAwesomeIcon
            className="edit-icon py-3"
            size="lg"
            icon={faPenToSquare}
          />
          <FontAwesomeIcon size="lg" icon={faSquareCheck} />
          <FontAwesomeIcon type="regular" size="lg" icon={faSquare} />
        </div>
      </div>
    </div>
  );
};

export default Card;
