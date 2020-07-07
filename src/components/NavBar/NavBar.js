import React from "react";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import s from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className="container">
      <nav className={s.nav}>
        <div className={`col-lg-2 ${s.logo} px-0`}>
          <Logo />
        </div>
        <div className={s.nav_container}>
          <ul>
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
