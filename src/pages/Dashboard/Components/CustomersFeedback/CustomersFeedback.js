import React from "react";
import "./CustomersFeedback.css";
import { customerFeedbackData } from "../../Constants/DashboardData";
import CustomerReviewCard from "../CustomerReviewcard/CustomerReviewCard";
import { motion } from "framer-motion";
import { IsDesktop } from "../../../../Utils/CSSUtil";

const CustomersFeedback = () => {
  const isDesktop = IsDesktop();
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: isDesktop ? 0.8 : 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="dashboard-right-panel background-dark customers-feedback-section custom-scroll-bar"
    >
      <div className="section-padding">
        <h4 className="section-head">Customers Feedback</h4>
        <ul className="customer-feedbacks">
          {customerFeedbackData.map((item, i) => (
            <CustomerReviewCard data={item} key={i} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default CustomersFeedback;
