import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const router = useRouter();

  const STYLES = ["megaLight", "megaDark"];

  const checkColor = STYLES.includes(textColor) ? textColor : STYLES[0];

  const changeBg = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 400) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBg);
  }

  return (
    <div className="navContainer">
      <nav
        className={
          `${navBg ?  styles.navbarItems + ' ' + styles.scrollBg  : styles.navbarItems}`
        }
      >
        <div className={` logo pb-2 `} onClick={() => router.push("/")}>
          <span
            className={
              navBg ? `scrollColor ${checkColor} mega` : ` ${checkColor} mega`
            }
          >
            Mega
          </span>
          <span className={` law `}>Law</span>
          <span
            className={
              navBg
                ? `scrollColor d-block partners ${checkColor}`
                : ` d-block partners ${checkColor}`
            }
          >
            Partners
          </span>
        </div>
        <div className={`px-1 px-sm-0 menuIcon `} onClick={handleClick}>
          {clicked ? (
            <Image
              width={50}
              height={10}
              src="/img/togglerClose.svg"
              className="img-fluid"
            />
          ) : (
            <Image
              width={50}
              height={10}
              src="/img/togglerOpen.svg"
              className=""
            />
          )}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.url}>
                  <a
                    className={
                      navBg
                        ? `poppins-medium scrollColor ${checkColor} ${item.cName}`
                        : `poppins-medium ${checkColor} ${item.cName} ${
                            router.pathname === item.url && "activeNav"
                          }`
                    }
                    target={item.target}
                  >
                    {console.log(router.pathname)}
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
          <div className="d-sm-none py-5">
            <Link href="#">
              <a className="px-3 poppins-medium text-secondary">Instagram</a>
            </Link>
            <Link href="#">
              <a className="px-3 poppins-medium text-secondary">Twitter</a>
            </Link>
            <Link href="#">
              <a className="px-3 poppins-medium text-secondary">Facebook</a>
            </Link>
          </div>
          <div className="d-sm-none text-center">
            <span className="text-secondary">&copy; 2021 Megalaw Partners</span>
          </div>
        </ul>
        <button
          className={`btn poppins-medium text-white nav-btn`}
          onClick={() => setOpenModal(true)}
        >
          Contact Us
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
