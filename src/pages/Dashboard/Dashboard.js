import React from "react";
import "./Dashboard.css";
import DashboardMetricsPanel from "./Components/DashboardMetricsPanel/DashboardMetricsPanel";
import GoalProgressGraph from "./Components/GoalProgressGraph/GoalProgressGraph";
import InteractiveOverviewPanel from "./Components/InteractiveOverviewPanel/InteractiveOverviewPanel";
import RecentOrders from "./Components/RecentOrders/RecentOrders";
import CustomersFeedback from "./Components/CustomersFeedback/CustomersFeedback";
import ActivityOverviewChart from "./Components/ActivityOverviewChart/ActivityOverviewChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="dashboard-container">
        <DashboardMetricsPanel />
        <GoalProgressGraph />
      </div>
      <div className="dashboard-container">
        <ActivityOverviewChart />
        <InteractiveOverviewPanel />
      </div>
      <div className="dashboard-container">
        <RecentOrders />
        <CustomersFeedback />
      </div>
    </div>
  );
};

export default Dashboard;
