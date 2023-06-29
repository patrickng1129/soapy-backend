import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import ColumnLeft from "./components/columnLeft";
import ColumnRight from "./components/columnRight";
import Layout from "./components/layout";
import Card from "./components/card";
import Login from "./components/login";
import ProtectedRoute from "./components/protected-route";
import ProfileSelector from "./components/profileSelector";
import AddEvent from "./components/addEvent";
import AddEventsPage from "./components/addEventsPage";

function App() {
  const [authenticated, setAuthenticated] = useState(() => {
    const lastAuthenticated = localStorage.getItem("lastAuthenticated");
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    return lastAuthenticated && lastAuthenticated > oneDayAgo;
  });

  const [selectedProfile, setSelectedProfile] = useState(() => {
    return localStorage.getItem("selectedProfile");
  });

  const [eventData, setEventData] = useState([]);
  const [isEventLoading, setIsEventLoading] = useState(true);

  const [editingData, setEditingData] = useState(null);

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", profile);
  };

  const fetchData = async () => {
    setIsEventLoading(true);
    try {
      const response = await axios.get("/api/events");
      setEventData(response.data.reverse());
    } catch (error) {
      console.error("There was an error retrieving the data!", error);
    }
    setIsEventLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Home = () => {
    const loadingElement = () => {
      return <div>Loading...</div>;
    };

    return (
      <div className="App">
        <Layout
          setAuthenticated={setAuthenticated}
          setSelectedProfile={setSelectedProfile}
        >
          <ColumnLeft />
          <div className="block">
            {isEventLoading ? (
              loadingElement()
            ) : (
              <>
                <div className="block" style={{ textAlign: "center" }}>
                  <AddEvent />
                </div>
                {eventData.map((data, index) => {
                  return (
                    <Card
                      data={data}
                      key={data._id}
                      setEditingData={setEditingData}
                      index={index}
                    />
                  );
                })}
              </>
            )}
          </div>
          <ColumnRight />
        </Layout>
      </div>
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Login
              setAuthenticated={setAuthenticated}
              authenticated={authenticated}
            />
          }
        ></Route>
        <Route
          path="/profile-select"
          element={
            <ProfileSelector
              handleProfileSelect={handleProfileSelect}
              selectedProfile={selectedProfile}
              authenticated={authenticated}
            />
          }
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute authenticated={authenticated && !!selectedProfile}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="form"
          element={
            <Layout
              setAuthenticated={setAuthenticated}
              setSelectedProfile={setSelectedProfile}
            >
              <AddEventsPage
                fetchData={fetchData}
                editingData={editingData}
                setEditingData={setEditingData}
              />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
