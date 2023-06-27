import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ColumnLeft from "./components/columnLeft";
import ColumnRight from "./components/columnRight";
import Header from "./components/header";
import Layout from "./components/layout";
import Card from "./components/card";
import datas from "./mockData.json";
import Login from "./components/login";
import ProtectedRoute from "./components/protected-route";
import ProfileSelector from "./components/profileSelector";

function App() {
  const [authenticated, setAuthenticated] = useState(() => {
    const lastAuthenticated = localStorage.getItem("lastAuthenticated");
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    return lastAuthenticated && lastAuthenticated > oneDayAgo;
  });

  const [selectedProfile, setSelectedProfile] = useState(() => {
    return localStorage.getItem("selectedProfile");
  });

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
    localStorage.setItem("selectedProfile", profile);
  };

  const Home = () => {
    return (
      <div className="App">
        <Header
          authenticated={authenticated}
          selectedProfile={selectedProfile}
          setAuthenticated={setAuthenticated}
          setSelectedProfile={setSelectedProfile}
        ></Header>
        <Layout>
          <ColumnLeft />
          <div className="block">
            {datas.map((data) => {
              return <Card data={data} key={data._id} />;
            })}
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
      </Routes>
    </Router>
  );
}

export default App;
