import Link from "next/link";
import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  FcAbout,
  FcBusinessContact,
  FcDisplay,
  FcStackOfPhotos,
  FcSms,
} from "react-icons/fc";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("header");
  const [scrollToSection, setScrollToSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "header",
        "profile",
        "invitation",
        "event",
        "gallery",
        "wish",
      ];
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section) => {
        const sectionEl = document.getElementById(section);

        if (!sectionEl) return;

        const sectionTop = sectionEl.offsetTop;
        const sectionBottom = sectionEl.offsetTop + sectionEl.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, scrollToSection]);

  const handleClick = (event, section) => {
    event.preventDefault();
    setTimeout(() => {
      setActiveSection(section);
    }, 1000);
    setScrollToSection(true);
    scroll.scrollTo(document.getElementById(section).offsetTop);
  };

  return (
    <nav
      className={
        activeSection && document.querySelector(`#${activeSection}`)
          ? "w-fit opacity-100  scale-100 flex flex-col fixed top-90 right-96 z-50 sm:right-[450px] md:right-[460px] lg:right-[460px]  transition-all duration-300 ease-linear"
          : "scale-0 opacity-0 transition-all duration-300 ease-linear"
      }
    >
      <ul className="w-full  bg-white/80 backdrop-blur flex flex-col gap-5  justify-center rounded-full h-full py-10  px-2">
        <li
          className={`relative group flex items-center justify-center ${
            activeSection === "header" ? "text-zinc-800/90" : ""
          }`}
        >
          <span
            className={
              activeSection === "header"
                ? "block left-6 text-sm absolute bg-zinc-200/80 px-2 rounded-full"
                : "hidden opacity-0 left-0 absolute bg-zinc-200/80 px-2 rounded-full "
            }
          >
            Invitation
          </span>
          <Link
            href="#header"
            className="nav-link"
            onClick={(event) => handleClick(event, "header")}
          >
            <FcAbout size={20} />{" "}
          </Link>
        </li>
        <li
          className={`relative group flex items-center justify-center ${
            activeSection === "profile" ? "text-zinc-800/90" : ""
          }`}
        >
          <span
            className={
              activeSection === "profile"
                ? "block left-6 text-sm absolute bg-zinc-200/80 px-2 rounded-full"
                : "hidden opacity-0 left-0 absolute bg-zinc-200/80 px-2 rounded-full "
            }
          >
            Profile
          </span>
          <Link
            href="#profile"
            className="nav-link"
            onClick={(event) => handleClick(event, "profile")}
          >
            <FcBusinessContact size={20} />
          </Link>
        </li>
        <li
          className={`relative group flex items-center justify-center ${
            activeSection === "event" ? "text-zinc-800/90" : ""
          }`}
        >
          <span
            className={
              activeSection === "event"
                ? "block  left-6 text-sm absolute bg-zinc-200/80 px-2 rounded-full"
                : "hidden  opacity-0 left-0 absolute bg-zinc-200/80 px-2 rounded-full "
            }
          >
            Event
          </span>
          <Link
            href="#event"
            className="nav-link"
            onClick={(event) => handleClick(event, "event")}
          >
            <FcDisplay size={20} />
          </Link>
        </li>
        <li
          className={`relative group flex items-center justify-center ${
            activeSection === "gallery" ? "text-zinc-800/90" : ""
          }`}
        >
          <span
            className={
              activeSection === "gallery"
                ? "block  left-6 text-sm absolute bg-zinc-200/80 px-2 rounded-full"
                : "hidden  opacity-0 left-0 absolute bg-zinc-200/80 px-2 rounded-full "
            }
          >
            Gallery
          </span>
          <Link
            href="#gallery"
            className="nav-link"
            onClick={(event) => handleClick(event, "gallery")}
          >
            <FcStackOfPhotos size={20} />
          </Link>
        </li>

        <li
          className={`relative group flex items-center justify-center ${
            activeSection === "wish" ? "text-zinc-800/90" : ""
          }`}
        >
          <span
            className={
              activeSection === "wish"
                ? "block  left-6 text-sm absolute bg-zinc-200/80 px-2 rounded-full"
                : "hidden  opacity-0 left-0 absolute bg-zinc-200/80 px-2 rounded-full "
            }
          >
            Wish
          </span>
          <Link
            href="#wish"
            className="nav-link"
            onClick={(event) => handleClick(event, "wish")}
          >
            <FcSms size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
