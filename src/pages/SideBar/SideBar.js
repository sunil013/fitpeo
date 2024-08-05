import React, { useState } from "react";
import "./SideBar.css";
import { IoMdLogOut } from "react-icons/io";
import { Tooltip } from "@mui/material";
import { sidebarMenu } from "../Dashboard/Constants/DashboardData";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <ul className="transition-ease-2 display-flex sidebar-menu-container">
          {sidebarMenu.map((item, i) => (
            <li key={i} className="sidebar-menu-item">
              <Tooltip
                title={item.name}
                placement="right"
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, -14],
                        },
                      },
                    ],
                  },
                }}
                arrow
                disableInteractive
              >
                <button
                  className={`sidebar-menu-btn ${
                    i === activeMenu ? "sidebar-menu-active" : ""
                  }`}
                  onClick={() => setActiveMenu(i)}
                >
                  {<item.Icon className="menu-btn-icon" />}
                </button>
              </Tooltip>
            </li>
          ))}
        </ul>
        <Tooltip
          title="Logout"
          placement="right"
          slotProps={{
            popper: {
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, -14],
                  },
                },
              ],
            },
          }}
          arrow
          disableInteractive
        >
          <button className="sidebar-menu-btn">
            <IoMdLogOut />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default SideBar;
