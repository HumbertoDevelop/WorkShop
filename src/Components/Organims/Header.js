import React, { createRef } from "react";
import { NavLink } from "react-router-dom";
import PrivateMenu from "../Molecules/PrivateMenu";
import PublicMenu from "../Molecules/PublicMenu";

const menu = createRef();

const Header = () => {
  return (
    <header className="main-header">
      <div className="ed-grid s-grid-5 cols-lg-10">
        <div className="s-cols-2  s-cross-center">
          <NavLink to="/">
            <img
              src="https://www.openenglish.com/wp-content/uploads/sites/24/2021/09/cropped-LogoMillon-curvas.png"
              alt="logoPage"
              className="main-logo"
            />
          </NavLink>
        </div>
        <div className="s-cols-3 lg-cols-8 main-menu-container s-cross-center s-main-end">
          <nav className="main-menu" ref={menu}>
            {localStorage.getItem("token") ? <PrivateMenu /> : <PublicMenu />}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
