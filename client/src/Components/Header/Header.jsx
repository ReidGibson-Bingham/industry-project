import logo from "./../../assets/arc-teryx.svg";
import './Header.scss';
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
        const isActive =
            location.pathname === "/form";
        return isActive;
    }

    return (
        <header className="header">
                <section className="header__logo-container">
                    <img className="header__logo" src={logo} />
                </section>

                <section className="header__pages">
                    <NavLink 
                        to='/'
                        className={`header__pages-name ${isActiveHome('/') ? 'header__pages-name--active' : ''}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to='/form'
                        className={`header__pages-name ${isActiveForm('/form') ? 'header__pages-name--active' : ''}`}
                    >
                        Data Input
                    </NavLink>
                </section>

        </header>
    )
}

export default Header;