import React from "react";

const Header = () => {
  return (
    // <nav className="py-5 px-2 lg:px-5 bg-[#38343c]">
    //   <div className="flex items-center justify-between">
    //     <div className="max-w-[150px]">
    //       <img

    //         alt="logo"
    //       />
    //     </div>
    //     <div className="flex items-center gap-7 text-md text-gray-300">

    //     </div>
    //   </div>
    //   </nav>
    <header class="header">
      <div class="group">
        <div class="span6">
          <a href="/">
            <img
              alt="Codeshare logo"
              class="header__logo"
              src="https://codeshare.io/-/img/codeshare-logo.svg?v=v3.32.2"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
