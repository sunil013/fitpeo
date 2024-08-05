import React, { useState } from "react";
import "./ActivityOverviewChart.css";
import { FormControl, MenuItem, Select } from "@mui/material";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartOptions, sampleChartData } from "../../Constants/DashboardData";
import { motion } from "framer-motion";
import { IsDesktop } from "../../../../Utils/CSSUtil";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler
);

const ActivityOverviewChart = () => {
  const [activityType, setActivityType] = useState("WEEKLY");
  const handleActivityChange = (e) => {
    setActivityType(e.target.value);
  };
  const isDesktop = IsDesktop();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: isDesktop ? 0.5 : 0.2 }}
      viewport={{ once: true }}
      className="dashboard-middle-panel background-dark"
    >
      <div className="section-padding">
        <div className="display-flex activity-types-container">
          <h4 className="section-head activity-title">Activity</h4>
          <FormControl className="custom-select" size="small">
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={activityType}
              onChange={handleActivityChange}
              className="select-item"
              MenuProps={{
                PaperProps: {
                  className: "custom-menu",
                },
              }}
            >
              <MenuItem value={"WEEKLY"}>weekly</MenuItem>
              <MenuItem value={"MONTHLY"}>monthly</MenuItem>
              <MenuItem value={"YEARLY"}>yearly</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="activity-bar-container">
          <Bar data={sampleChartData} height={200} options={chartOptions} />
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityOverviewChart;
