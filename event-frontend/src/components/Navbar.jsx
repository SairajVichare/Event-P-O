import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-[100px] flex items-center px-6 relative">
        {/* LEFT MENU (Desktop) */}
        <ul className="hidden md:flex w-1/3 items-center gap-10 text-white text-[16px] font-semibold tracking-wide">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>

          {/* Services Dropdown */}

          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[20px] py-2">
              Services
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 text-white text-center pointer-events-none">
          <h1 className="text-2xl tracking-[0.3em] font-bold">TRUPP & FEST</h1>
        </div>

        {/* RIGHT MENU (Desktop) */}
        <ul className="hidden md:flex w-1/3 ml-auto items-center gap-10 text-white text-[16px] font-semibold tracking-wide">
          <li>
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/reviews">
              Client Reviews
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md text-white">
          <ul className="flex flex-col items-center gap-7 py-8 text-lg font-semibold tracking-wide">
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
