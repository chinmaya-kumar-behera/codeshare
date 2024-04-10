import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="group">
        <div className="span6">
          <a href="/">
            <img
              alt="Codeshare logo"
              className="header__logo"
              src="https://codeshare.io/-/img/codeshare-logo.svg?v=v3.32.2"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
