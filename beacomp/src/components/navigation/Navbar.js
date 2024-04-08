import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navlinks } from "./Navlinks";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-24 md:shadow-xl bg-white">
      <div className="container mx-auto flex justify-between items-center h-full px-2 2xl:px-16">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link href="/">
            <img
              src="/logos.jpg"
              className="md:cursor-pointer h-auto w-12 rounded-full"
              alt="logo"
            />
          </Link>
          <div className="md:hidden py-3" onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </div>
        </div>

        <ul className="md:flex hidden uppercase items-center gap-8 text-sm hover:to-blue-400 ">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Beranda
            </Link>
          </li>

          <Navlinks />
        </ul>
        {/* mobile devise */}
        <ul
          className={`
          md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Beranda
            </Link>
          </li>

          <Navlinks />
        </ul>
      </div>
    </nav>
  );
};
