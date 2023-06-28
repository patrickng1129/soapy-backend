import React from "react";
import "./card.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

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
    <div className="column ">
      <div
        className="box"
        id="box-content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div className="media">
          <div className="media-left">
            {/* <figure className="image is-64x64">
              <img src={retrieveImage(data.addedBy)} />
            </figure> */}
          </div>
          <div>
            <div className="content" style={contentStyle}>
              <p>{`${retrieveUser(data.addedBy)}  ${
                data.destinationName
              }" "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec eros eget nisl fringilla commodo."`}</p>
            </div>
            {/* TO BE REFACTORED */}
            {/* <div className="box">
              <div style={commentUsernameContainer}>
                <figure className="image is-32x32">
                  <img src={retrieveImage(data.memos[0].writtenBy)} />
                </figure>
                <div className="pl-2">
                  {retrieveUser(data.memos[0].writtenBy)} said
                </div>
              </div>
              <div className="pl-1">{data.memos[0].text}</div>
            </div>  */}
            {/* END OF REFACTOR */}
          </div>
        </div>
        <div
          className="media-right"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <EditOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Card;
