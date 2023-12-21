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
        <section className="header__pages">
          <NavLink
            to="/"
            className={`header__pages-name ${
              isActiveHome("/") ? "header__pages-name" : ""
            }`}
          >
            MEN
          </NavLink>
          <NavLink
            to="/form"
            className={`header__pages-name ${
              isActiveForm("/form") ? "header__pages-name" : ""
            }`}
          >
            WOMEN
          </NavLink>
          <NavLink
            to="/form"
            className={`header__pages-name ${
              isActiveForm("/form") ? "header__pages-name" : ""
            }`}
          >
            EXPLORE
          </NavLink>
          <NavLink
            to="/form"
            className={`header__pages-name ${
              isActiveForm("/form") ? "header__pages-name--active" : ""
            }`}
          >
            FIND SIZE
          </NavLink>
        </section>
      </section>
      <div className="header-content__right">
        <span className="header__search"> SEARCH </span>

        {/* <img
          className="header__img"
          src="https://images-dynamic-arcteryx.imgix.net/foundation-ui/svgs/Cart.svg"
          alt="Cart Icon"
        /> */}
      </div>
    </header>
  );
};

export default Header;
