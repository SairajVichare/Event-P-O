import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import logo from "../assets/logo.png";

const DropdownLinks = [
  { id: 1, name: "BABY EVENTS", link: "/services/baby-events" },
  { id: 2, name: "BIRTHDAY EVENTS", link: "/services/birthday-events" },
  {
    id: 6,
    name: "FESTIVAL & CULTURAL EVENTS",
    link: "/services/festivalCultural-events",
  },
  {
    id: 7,
    name: "PERSONAL & PRIVATE EVENTS",
    link: "/services/personalprivate-events",
  },
  { id: 10, name: "WEDDING EVENTS", link: "/services/wedding-events" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu & services dropdown on route change
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-[100px] transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <nav className="w-full h-[100px] flex items-center px-8 justify-start">
        {/* LOGO - TOP LEFT */}
        <Link to="/" className="flex items-center mr-[90px]">
          <img
            src={logo}
            alt="Y & B event"
            className="h-[100px] w-auto object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="ml-20">
          <ul className="hidden md:flex items-center gap-20 text-white text-[16px] font-semibold tracking-wide">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="group relative cursor-pointer">
              <div className="flex items-center gap-1">
                Services
                <FaCaretDown className="ml-1 text-yellow-400 transition-transform duration-300 ease-out group-hover:rotate-180 group-hover:scale-110" />
              </div>

              <div className="  absolute left-0 top-full pt-2 hidden group-hover:block w-[300px] rounded-xl bg-white p-4 text-black shadow-xl">
                {DropdownLinks.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    className={({ isActive }) =>
                      `block rounded-md px-4 py-2 text-sm transition
                     ${
                       isActive
                         ? "bg-yellow-100 text-yellow-600 font-semibold"
                         : "hover:bg-gray-100"
                     }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </li>

            <li>
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/reviews" className="nav-link">
                Client Reviews
              </Link>
            </li>

            <li>
              <Link to="/contact" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <Link
          to="/contact"
          className="ml-40 hidden md:inline-flex rounded-full border border-yellow-400 px-6 py-3 text-sm font-semibold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        >
          Book Event
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden ml-auto text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md text-white">
          <ul className="flex flex-col items-center gap-7 py-8 text-lg font-semibold">
            <li>
              <Link to="/" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="w-full text-center">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-center gap-2 w-full"
              >
                Services
                <FaCaretDown
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <ul className="mt-4 ml-4 rounded-xl bg-yellow-400/10 border-l-4 border-yellow-400 px-4 py-3 space-y-1">
                  {DropdownLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block rounded-lg px-3 py-2 text-[13px] font-medium text-yellow-300 transition-all duration-300 hover:bg-yellow-400/20 hover:text-yellow-200 active:scale-95"
                      >
                        ▸ {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/gallery" onClick={() => setMobileOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/reviews" onClick={() => setMobileOpen(false)}>
                Client Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
