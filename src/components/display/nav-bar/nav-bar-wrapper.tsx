import React from "react";
import NavBar from "./nav-bar";
import SearchBar from "../search-bar/search-bar";
import Dropdown from "../drop-down/Drop-down";
import Link from "next/link";
const NavBarWrapper = () => {
  return (
    <div className="navbar bg-base-100 gap-x-10 border-b-2 border-gray-200 text-lg sticky top-0 z-10">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl font-bold" href={"/"}>
          ShopEase
        </Link>
      </div>
      <div>
        <NavBar />
      </div>
      <div className="flex-none gap-x-5">
        <SearchBar />
        <Dropdown />
      </div>
    </div>
  );
};

export default NavBarWrapper;
