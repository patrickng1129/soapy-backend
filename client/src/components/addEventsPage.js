import React, { useState, useEffect } from "react";
import axios from "axios";
import CreatableSelect from "react-select/creatable";
import { useNavigate, useLocation } from "react-router-dom";
import "./addEventsPage.css";

const AddEventsPage = ({ fetchData, editingData, setEditingData }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (location.pathname !== "/form") {
        setEditingData(null);
      }
    };
  }, [location]);
  console.log(editingData);
  const options = [
    { value: "举起猪脚画了个大饼说", label: "举起猪脚画了个大饼说" },
    { value: "觉得可能有可能", label: "觉得可能有可能" },
    { value: "说不是画饼一定可以", label: "说不是画饼一定可以" },
  ];

  const [eventName, setEventName] = useState(
    !!editingData ? editingData.eventName : ""
  );
  const [action, setAction] = useState(
    !!editingData ? editingData.action : options[0].value
  );

  const [memos, setMemos] = useState(!!editingData ? editingData.memos : "");

  const buttonStyle = {
    backgroundColor: "#D8DDFE",
    borderRadius: "20px",
    width: "30%",
    margin: "0 auto",
  };
  const currentUser = localStorage.getItem("selectedProfile");

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (!!editingData) {
        response = await axios.put(`/api/events/${editingData._id}`, {
          addedBy: currentUser,
          eventName,
          action,
          memos: {
            writtenBy: currentUser,
            text: memos,
          },
          completed: false,
        });
      } else {
        response = await axios.post("/api/events", {
          addedBy: currentUser,
          eventName,
          action,
          memos: {
            writtenBy: currentUser,
            text: memos,
          },
          completed: false,
        });
      }
      setEditingData(null);
      fetchData();
      navigate("/home");
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="column is-3"></div>
      <div className="column">
        <div className="section py-1">
          <div className="box form-section" style={{ borderRadius: "20px" }}>
            <form className="form" onSubmit={handleSubmitEvent}>
              <label className="label">
                {currentUser + '...'}
                <CreatableSelect
                  defaultValue={
                    !!editingData ? { value: action, label: action } : null
                  }
                  formatCreateLabel={(inputValue) => `创建 ${inputValue}`}
                  placeholder="请选择或者自己写"
                  options={options}
                  styles={{
                    control: (base) => ({
                      ...base,
                      boxShadow: "none",
                      borderRadius: "20px",
                    }),
                  }}
                  onChange={(e) => setAction(e.value)}
                />
              </label>
              <label className="label">
                想什么呢？
                <input
                  className="input"
                  value={eventName}
                  style={{ boxShadow: "none", borderRadius: "20px" }}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="哪家的饼好吃呢"
                ></input>
              </label>
              <label className="label">
                有什么要注意的吗？
                <textarea
                  value={memos.text}
                  placeholder="可以没有"
                  className="textarea"
                  style={{ boxShadow: "none", borderRadius: "20px" }}
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
      <div className="column is-3"></div>
    </>
  );
};

export default AddEventsPage;
