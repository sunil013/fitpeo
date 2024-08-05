import React from "react";
import "./InteractiveOverviewPanel.css";
import { overviewData } from "../../Constants/DashboardData";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { IsDesktop } from "../../../../Utils/CSSUtil";

const InteractiveOverviewPanel = () => {
  const isDesktop = IsDesktop();
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: isDesktop ? 0.5 : 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="dashboard-right-panel background-dark"
    >
      <ul className="overview-container">
        {overviewData.map((item, i) => (
          <li key={i} className="overview-item">
            <button className="section-padding display-flex overview-btn">
              <div className="display-flex ov-text-container">
                <div
                  className="display-flex overview-icn-container"
                  style={{ background: item.backgroundColor }}
                >
                  <item.Icon className="ov-icn" color={item.icnColor} />
                </div>
                <p className="ov-name">{item.name}</p>
              </div>
              <div className="display-flex ov-arrow">
                <FaAngleRight className="ov-arrow-icn" />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default InteractiveOverviewPanel;
