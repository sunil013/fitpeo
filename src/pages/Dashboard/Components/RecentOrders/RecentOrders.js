import React from "react";
import "./RecentOrders.css";
import OrdersTable from "../OrdersTable/OrdersTable";
import { motion } from "framer-motion";
import { IsDesktop } from "../../../../Utils/CSSUtil";

const RecentOrders = () => {
  const isDesktop = IsDesktop();
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: isDesktop ? 0.8 : 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="dashboard-middle-panel background-dark recent-orders-section custom-scroll-bar"
    >
      <div className="section-padding">
        <h4 className="section-head">Recent Orders</h4>
        <OrdersTable />
      </div>
    </motion.div>
  );
};

export default RecentOrders;
