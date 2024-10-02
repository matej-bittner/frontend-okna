"use client";
import { NavLinks } from "@/data";
import { useState } from "react";
import ButtonLink from "./ButtonLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full sm:absolute sm:top-5 z-10">
      <div className="absolute right-2 top-2 sm:hidden">
        <ButtonLink size="sm" type="button" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </ButtonLink>
        {isOpen && (
          <ul
            className=" w-[90px] "
            style={{ height: `${NavLinks.length * 2.5}rem` }}
          >
            {NavLinks.map((link, i) => {
              return (
                <li
                  key={i}
                  className="h-10 bg-light-gray/30 text-black flex items-center justify-center font-light"
                >
                  <a onClick={() => setIsOpen(false)} href={"#" + link.title}>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <ul className="flex justify-between max-w-[80%] mx-auto max-sm:hidden text-lg md:text-xl xl:text-2xl">
        {NavLinks.map((link, i) => {
          return (
            <li key={i} className="">
              <a
                className="link link-underline link-underline-black"
                href={"#" + link.title}
              >
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
