import React from "react";
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendarAlt,
  FaRegCalendar,
} from "react-icons/fa";
export const Sidebar = () => {
  return (
    <div className="sidebar" data-testid="sidebar">
      <div className="sidebar__generic">
        <li>
          <span>
            <FaInbox />
          </span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
        </li>
        <li>Next 7 days</li>
      </div>
      <div className="sidebar_+middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projects</h2>
      </div>
      <ul className="Sidebar__Projects">Projects will be here</ul>
    </div>
  );
};
