import logo from "./../../assets/arc-teryx.svg";
import "./Header.scss";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [activePage, setActivePage] = useState(null);
  const location = useLocation();

  const handlePageClick = (pageName) => {
    setActivePage(pageName);
  };

  const isActiveHome = () => {
    const isActive = location.pathname === "/";
    return isActive;
  };

  const isActiveForm = () => {
    const isActive = location.pathname === "/form";
    return isActive;
  };

  return (
    <header className="header">
      <section className="header__logo-container right">
        <img className="header__logo" src={logo} />
        <ul className="header__items">
          <li> MEN</li>
          <li> WOMEN</li>
          <li> EXPLORE</li>
          <li> GIFT GUIDE</li>
          <li> SIZE GUIDE</li>
        </ul>
      </section>

      <section className="header__pages">
        <NavLink
          to="/"
          className={`header__pages-name ${
            isActiveHome("/") ? "header__pages-name--active" : ""
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/form"
          className={`header__pages-name ${
            isActiveForm("/form") ? "header__pages-name--active" : ""
          }`}
        >
          Data Input
        </NavLink>
      </section>
    </header>
  );
};

export default Header;
