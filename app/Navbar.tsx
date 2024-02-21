"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 border-neutral">
      <div className="flex-1">
        <a className="p-2">MR Tracker</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Charts</Link>
          </li>
          <li>
            <Link href="/developers">Developers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
