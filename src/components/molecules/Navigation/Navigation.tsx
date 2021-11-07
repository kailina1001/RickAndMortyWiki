import * as React from "react";
import { memo } from "react";
import "./index.css";
import navLogo from "../../../images/nav-logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navigation = memo(() => {
  function openMobile() {
    const navMenu = document.querySelector(".app-nav");
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navList = document.querySelector(".nav-list");
    navMenu?.classList.toggle("mobile-active");
    mobileBtn?.classList.toggle("mobile-active");
    navList?.classList.toggle("mobile-active");
  }
  return (
    <nav className="app-nav">
      <div className="container app-nav__container">
        <div className="logo">
          <Link className="for-link" to={"/"}>
            <img src={navLogo} alt="nav-logo" />
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-point">
            <Link className="for-link" to={"/"}>
              Main
            </Link>
          </li>
          <li className="nav-point">
            <Link className="for-link" to={"/characters"}>
              Characters
            </Link>
          </li>
          <li className="nav-point">
            <Link className="for-link" to={"/locations"}>
              Locations
            </Link>
          </li>
          <li className="nav-point">
            <Link className="for-link" to={"/episodes"}>
              Episodes
            </Link>
          </li>
        </ul>
        <button className="mobile-menu-btn" onClick={openMobile}>
          <span></span>
        </button>
      </div>
    </nav>
  );
});
