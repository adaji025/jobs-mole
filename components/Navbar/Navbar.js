import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { navMenuItems } from "./NavItems";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.navbarItems}>
        <div className={styles.logo}>
          <h1 className="text-2xl font-bold pl-2 ">JobsMole</h1>
        </div>
        <div
          className={`cursor-pointer pr-2 ${styles.menuIcon}`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={` ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          {navMenuItems.map((menu) => (
            <span className="block p-2 font-semibold text-base md:text-xl text-primary-dark cursor-pointer hover:text-primary-blue transition-all duration-200 "
            onClick={() => router.push(menu.url)}>
              {menu.title}
            </span>
          ))}
          <div
            className={`lg:hidden flex flex-col justify-center items-center font-semibold text-primary-blue`}
          >
            <button className="px-4 py-2 mb-2">login</button>
            <button className="border border-primary-blue w-[150px] py-2 rounded-3xl hover:border-primary-dark hover:text-primary-dark bg-primary-light transition-all duration-200">
              Register
            </button>
          </div>
        </div>
        <div
          className={`hidden lg:flex   space-x-4 pr-2 font-semibold text-primary-blue`}
        >
          <button className="px-4 py-2 hover:text-primary-dark transition-all duration-200">
            login
          </button>
          <button className="border text-center border-primary-blue w-[150px] py-2 rounded-3xl hover:border-primary-dark hover:text-primary-dark bg-primary-light transition-all duration-200">
            Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
