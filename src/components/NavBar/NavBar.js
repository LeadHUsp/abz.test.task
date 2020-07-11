import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import s from "./NavBar.module.scss";

const NavBar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const menu = React.createRef();
  const toggler = React.createRef();
  const menuToggle = () => {
    setMenuShow(!menuShow);
  };
  return (
    <header className="container">
      <nav className={s.nav}>
        <div className={`col-md-2 col-6 ${s.logo} px-0`}>
          <Logo />
        </div>
        <div className={`${s.nav_container} col`}>
          <button
            className={s.menu_toggler}
            onClick={menuToggle}
            ref={toggler}
          ></button>
          <ul className={`${menuShow ? s.show : ""}`} ref={menu}>
            <li>About me</li>
            <li>Relationships</li>
            <li>Requirements</li>
            <li>Users</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
