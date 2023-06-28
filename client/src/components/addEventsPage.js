import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";

const AddEventsPage = () => {
  const navigate = useNavigate();
  const options = [
    { value: "wants to", label: "wants to" },
    { value: "Would like to", label: "would like to" },
    { value: "prefer", label: "prefer" },
  ];

  const [eventName, setEventName] = useState("");
  const [action, setAction] = useState(options[0].value);
  const [memos, setMemos] = useState("");

  const buttonStyle = { backgroundColor: "#D8DDFE" };
  const currentUser = localStorage.getItem("selectedProfile");

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/submit-event", {
        addedBy: currentUser,
        eventName,
        action,
        memos: {
          writtenBy: currentUser,
          text: memos,
        },
        completed: false,
      });
      console.log(response.data);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="column"></div>
      <div className="column">
        <div className="section py-1">
          <div className="box">
            <form className="form" onSubmit={handleSubmitEvent}>
              <label className="label">
                {`Choose an option`}
                <CreatableSelect
                  formatCreateLabel={(inputValue) => `创建 ${inputValue}`}
                  placeholder="Placeholder"
                  options={options}
                  styles={{
                    control: (base) => ({
                      ...base,
                      boxShadow: "none",
                    }),
                  }}
                  onChange={(e) => setAction(e.value)}
                />
              </label>
              <label className="label">
                Name:
                <input
                  className="input"
                  style={{ boxShadow: "none" }}
                  onChange={(e) => setEventName(e.target.value)}
                ></input>
              </label>
              <label className="label">
                Memos:
                <textarea
                  className="textarea"
                  style={{ boxShadow: "none" }}
                  onChange={(e) => setMemos(e.target.value)}
                ></textarea>
              </label>
              <button className="button" type="submit" style={buttonStyle}>
                交卷！
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="column"></div>
    </>
  );
};

export default AddEventsPage;
