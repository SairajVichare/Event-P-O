import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";

const DropdownLinks = [
  { id: 1, name: "BABY EVENTS", link: "/services/baby-events" },
  { id: 2, name: "BIRTHDAY EVENTS", link: "/services/birthday-events" },
  { id: 3, name: "DECOR & STYLING SERVICES", link: "/services/decorstyling-events" },
  {
    id: 4,
    name: "ENTERTAINMENT SERVICES",
    link: "/services/entertainment-events",
  },
  { id: 5, name: "ENTRY CONCEPTS (BRIDE / GROOM / COUPLE)", link: "/services/entry-events" },
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
  {
    id: 8,
    name: "TECHNICAL & SPECIAL EFFECTS",
    link: "/services/technicalspecial-events",
  },
  { id: 9, name: "THEME-BASED WEDDING CONCEPTS", link: "/services/themewedding-events" },
  { id: 10, name: "WEDDING EVENTS", link: "/services/wedding-events" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <nav className="w-full h-[120px] flex items-center px-8 justify-start">
        {/* LOGO - TOP LEFT */}
        <Link to="/" className="flex items-center mr-[90px]">
          <img
            src="/src/assets/logo.png"
            alt="Y & B event"
            className="h-[115px] w-auto object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.6)]"
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
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </div>

              <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-[180px] rounded-md bg-white p-2 text-black shadow-lg">
                {DropdownLinks.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </Link>
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
            <li>Services</li>
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
