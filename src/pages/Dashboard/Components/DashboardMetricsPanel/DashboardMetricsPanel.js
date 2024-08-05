import React from "react";
import "./DashboardMetricsPanel.css";
import { dashboardMetricsData, status } from "../../Constants/DashboardData";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";

const DashboardMetricsPanel = () => {
  return (
    <div className="dashboard-middle-panel">
      <ul className="metrics-container">
        {dashboardMetricsData.map((item, i) => (
          <motion.li
            key={i}
            className="background-dark metric-item"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className="display-flex metric-icon-container"
              style={{ background: item.backgroundColor }}
            >
              <item.Icon className="metric-icon" color={item.icnColor} />
            </div>
            <p className="metric-name">{item.name}</p>
            <div className="display-flex metric-count-container">
              <p className="metric-count">{item.count}</p>
              <div
                className={`display-flex ${
                  item.status === status.INCREASED
                    ? "percent-increase"
                    : "percent-decrease"
                }`}
              >
                {item.status === status.INCREASED ? (
                  <FaCaretUp />
                ) : (
                  <FaCaretDown />
                )}
                <span>{item.percent}</span>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardMetricsPanel;
