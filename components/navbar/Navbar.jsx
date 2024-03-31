"use client";
import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";

import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="z-50">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
      <div className="mt-[6px] h-1">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      <div className="ml-[-16px]">
        <SignedOut>
          <Link
            href="/sign-in"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <FaRegUserCircle />
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
