import { Drawer } from "@mui/material";
import React from "react";
import "./SideDrawer.css";
import { FaDropbox } from "react-icons/fa6";
import { sidebarMenu } from "../Dashboard/Constants/DashboardData";
import { IoMdLogOut } from "react-icons/io";

const SideDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{ className: "sidebar-drawer" }}
    >
      <div className="sidebar-draw-container">
        <FaDropbox className="sidebar-logo" />
        <div className="side-drawer-menu-container">
          <div className="side-drawer-menu">
            {sidebarMenu.map((item, i) => (
              <button
                onClick={onClose}
                className="display-flex side-drawer-btn"
              >
                <item.Icon className="side-drawer-icn" />
                {item.name}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            className="display-flex side-drawer-btn logout-btn"
          >
            <IoMdLogOut />
            Logout
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default SideDrawer;
