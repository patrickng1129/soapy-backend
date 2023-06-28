import React from "react";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const navigate = useNavigate();
  return (
    <div
      className="block"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexGrow: 1,
      }}
    >
      <div
        className="box"
        style={{
          minWidth: "5vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate("/form")}
      >
        <div className="pr-2" style={{ textAlign: "center" }}>
          Add
        </div>
        <DrawOutlinedIcon fontSize="large" sx={{ color: "black" }} />
      </div>
    </div>
  );
};

export default AddEvent;
