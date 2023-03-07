import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toogle, setToogle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-around sm:justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex text-primary items-center text-3xl sm:text-2xl gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className=" font-logo">Firman</p>
          <p className="sm:block hidden  font-logo">
            Khoiril <span className=" font-logo">Rohmatullah</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li onClick={() => setActive(link.title)} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-primary font-medium cursor-pointer  transition duration-300`} key={link.id}>
              <a href={`#${link.id}`} className="">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toogle ? close : menu} alt="menu" className="w-[28px] h-[28px] cursor-pointer" onClick={() => setToogle(!toogle)} />
          <div className={`${!toogle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 py-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end flex-col items-start cursor-pointer gap-4">
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setActive(link.title);
                    setToogle(!toogle);
                  }}
                  className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-primary font-medium cursor-pointer  transition duration-300`}
                  key={link.id}
                >
                  <a href={`#${link.id}`} className="">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
