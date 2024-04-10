import React from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import UserHandler from '../../handlers/UserHandler';
import NavigationHandler from '../../handlers/NavigationHandler';

const Profile = () => {
    const { navigateToNewUrl, navigateToCodes } = NavigationHandler();
    const user = useSelector((state) => state.auth.user);
    const { logoutHandler } = UserHandler();

  return (
    <div>
      {user ? (
        <Menu className="p-0 m-0 border-none outline-none">
          <MenuHandler>
            <span className="text-lg text-gray-300 cursor-pointer hover:text-gray-200 transition-all">
              {user.name}
            </span>
          </MenuHandler>
          <MenuList className="p-0 m-0 focus:none shadow-lg outline-none border border-gray-500 rounded-lg overflow-hidden z-30 bg-white text-gray-800 font-semibold">
            <MenuItem
              className="px-4 py-3 border hover:bg-gray-200 focus:none border-none"
              onClick={navigateToCodes}
            >
              Your Codeshares
            </MenuItem>

            <MenuItem
              className="px-4 py-3 border hover:bg-gray-200 focus:none border-none"
              onClick={navigateToNewUrl}
            >
              New Codeshares
            </MenuItem>
            <MenuItem className="px-4 py-3 border hover:bg-gray-200 focus:none border-none">
              Account Settings
            </MenuItem>
            <MenuItem
              className="px-4 py-3 border hover:bg-gray-200 focus:none border-none"
              onClick={logoutHandler}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <div className="flex items-center gap-7 text-md text-gray-300">
          <a href="/register">
            <button className="text-gray-300">Sign Up</button>
          </a>
          <a href="/login">
            <button className="text-gray-300">Log In</button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Profile