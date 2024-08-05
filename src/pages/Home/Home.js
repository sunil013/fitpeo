import React from "react";
import "./Home.css";
import SideBar from "../SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <div className="home-page">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default Home;
