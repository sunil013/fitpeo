import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSettingsOutline, IoNotifications } from "react-icons/io5";
import { FaDropbox } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import SideDrawer from "../SideDrawer/SideDrawer";

const Header = () => {
  const [showControls, setShowControls] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const controlsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setShowControls(false);
      }
    };

    if (showControls) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showControls]);

  const onClickMenuItem = () => {
    setShowControls(false);
  };

  const onCloseSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <div className="display-flex header">
      <FaDropbox className="header-logo" />
      <RxHamburgerMenu
        onClick={() => setOpenSidebar(true)}
        className="control-menu-icn header-menu-icn"
      />
      <div className="display-flex header-container">
        <div className="header-search-bar">
          <FiSearch />
          <input
            type="search"
            className="header-search-input"
            placeholder="Search..."
          />
        </div>
        <div className="display-flex header-controls">
          <div className="header-control-item">
            <MdOutlineMailOutline />
          </div>
          <div className="header-control-item">
            <IoSettingsOutline />
          </div>
          <div className="header-control-item">
            <IoNotifications />
          </div>
          <img
            src="https://res.cloudinary.com/sunil013/image/upload/v1722752119/testimonial-user-1_ydgcc2.jpg"
            alt="profile"
            className="header-profile-avatar"
          />
        </div>
        <div className="header-controls-mobile" ref={controlsRef}>
          <BsThreeDotsVertical
            className="control-menu-icn"
            onClick={() => setShowControls((prev) => !prev)}
          />
          {showControls && (
            <ul className="controls-list-mobile">
              <li className="control-item-mobile">
                <button
                  onClick={onClickMenuItem}
                  className="display-flex control-item-btn"
                >
                  <MdOutlineMailOutline className="control-mobile-icn" />
                  Messages
                </button>
              </li>
              <li className="control-item-mobile">
                <button
                  onClick={onClickMenuItem}
                  className="display-flex control-item-btn"
                >
                  <IoNotifications className="control-mobile-icn" />
                  Notifications
                </button>
              </li>
              <li className="control-item-mobile">
                <button
                  onClick={onClickMenuItem}
                  className="display-flex control-item-btn"
                >
                  <IoSettingsOutline className="control-mobile-icn" />
                  Settings
                </button>
              </li>
            </ul>
          )}
        </div>
        <SideDrawer open={openSidebar} onClose={onCloseSidebar} />
      </div>
    </div>
  );
};

export default Header;
