"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const pathname = usePathname();

  const navLink = [
    { path: "/", title: "HOME" },
    { path: "/about", title: "ABOUT" },
    { path: "/products", title: "PRODUCTS" },
  ];
  return (
    <div className="flex flex-cols gap-x-10 ">
      {navLink.map((navTo) => {
        return (
          <Link
            href={navTo.path}
            key={navTo.title}
            className={`${
              pathname === navTo.path && "  text-teal-600 font-bold"
            }`}
          >
            {navTo.title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
