import React, { useState } from "react";
import "./card.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useNavigate } from "react-router-dom";

const Card = ({ data, setEditingData, index }) => {
  const navigate = useNavigate();
  console.log("aaa: ", data.memos);

  const retrieveImage = (id) => {
    if (id === "Strawberry") {
      return `${process.env.PUBLIC_URL}/ppa.jpeg`;
    } else {
      return `${process.env.PUBLIC_URL}/ppp.jpeg`;
    }
  };
  const retrieveUser = (id) => {
    if (id === "Strawberry") {
      return `Strawberry`;
    } else {
      return `Soapy`;
    }
  };
  const handleEditClick = () => {
    setEditingData(data);
    navigate("/form");
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
        className="box card"
        id="box-content"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          "--i": index,
          borderRadius: "20px",
        }}
      >
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={retrieveImage(data.addedBy)} />
            </figure>
          </div>
          <div>
            <div className="content" style={contentStyle}>
              <p>{`${data.addedBy}  ${data.action} ${data.eventName}`}</p>
            </div>
            {data.memos.text === "" ? null : (
              <div className="box py-2">
                <div style={commentUsernameContainer}>
                  <figure className="image is-32x32">
                    <img src={retrieveImage(data.memos.writtenBy)} />
                  </figure>
                  <div className="pl-2">
                    {retrieveUser(data.memos.writtenBy) + "提醒说:"}
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>{data.memos.text}</div>
              </div>
            )}
          </div>
        </div>
        <div
          className="media-right"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <EditOutlinedIcon
            onClick={() => handleEditClick()}
            className="edit-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
