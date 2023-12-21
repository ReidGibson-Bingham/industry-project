import logo from "./../../assets/arc-teryx.svg";
import './Header.scss';

const Header = () => {

    return (
        <header className="header">
            
                <section className="header__logo-container">
                    <img className="header__logo" src={logo} />
                </section>

                <section className="header__pages">
                    <p className={`header__pages-name`}>
                        Warehouses
                    </p>
                    <p className={`header__pages-name`}>
                        Inventory
                    </p>
                </section>
        </header>
    )
}

export default Header;