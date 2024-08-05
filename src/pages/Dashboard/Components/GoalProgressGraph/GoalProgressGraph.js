import React from "react";
import { FaCaretUp } from "react-icons/fa";
import "./GoalProgressGraph.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chart2, registerables } from "chart.js";
import { motion } from "framer-motion";
import { goalGraphdata, goalGraphOptions } from "../../Constants/DashboardData";
import { IsDesktop } from "../../../../Utils/CSSUtil";

Chart2.register(...registerables);

const GoalProgressGraph = () => {
  const isDesktop = IsDesktop();
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw(chart) {
      if (chart.config.type === "doughnut") {
        const ctx = chart.ctx;
        const chartArea = chart.chartArea;
        const { width, height } = chartArea;

        ctx.save();
        ctx.font = "bold 16px 'Poppins', sans-serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        ctx.fillText("70%", width / 2, height / 2 - 10);

        ctx.font = "normal 10px 'Poppins', sans-serif";
        ctx.fillText("Goal", width / 2, height / 2 + 5);
        ctx.fillText("Completed", width / 2, height / 2 + 20);

        ctx.restore();
      }
    },
  };

  Chart2.register(centerTextPlugin);

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: isDesktop ? 0 : 0.5 }}
      viewport={{ once: true }}
      className="dashboard-right-panel background-dark"
    >
      <div className="section-padding goal-graph-container">
        <div className="goal-text-container">
          <p className="goal-text-name">Net Profit</p>
          <h4 className="goal-text-profit">$6759.25</h4>
          <div className="display-flex percent-increase">
            <FaCaretUp />
            <span>3%</span>
          </div>
        </div>
        <div className="goal-chart-container">
          <div style={{ height: "110px" }}>
            <Doughnut data={goalGraphdata} options={goalGraphOptions} />
          </div>
          <span>*The values here has been rounded off</span>
        </div>
      </div>
    </motion.div>
  );
};

export default GoalProgressGraph;
