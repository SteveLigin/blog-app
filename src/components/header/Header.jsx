import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headertitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/3041110/pexels-photo-3041110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  );
}

export default Header;
