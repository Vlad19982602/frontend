import React from "react";
import "./Sidebar.css";

/**
 * Sidebar component that contains links to the company's work and projects.
 *
 * @component
 * @example
 * return (
 *   <Sidebar />
 * )
 */
const Sidebar: React.FC = () => {
  return (
    // Sidebar component with links to company's work and projects.
    <aside className="sidebar page__sidebar">
      <h2 className="sidebar__title">Наши работы</h2>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <a className="sidebar__link" href="#project1">
            Project 1
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link" href="#project2">
            Project 2
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link" href="#project3">
            Project 3
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link" href="#project4">
            Project 4
          </a>
        </li>
        <li className="sidebar__item">
          <a className="sidebar__link" href="#project5">
            Project 5
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
