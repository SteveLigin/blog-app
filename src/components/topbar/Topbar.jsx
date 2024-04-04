import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">WRITE</Link>
          </li>
          <li className="topListItem">
            <Link to="register">REGISTER</Link>
          </li>
          <li className="topListItem">
            <Link to="login">lOGIN</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
