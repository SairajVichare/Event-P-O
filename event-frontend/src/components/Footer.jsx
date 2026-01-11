import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaSquareXTwitter,
} from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-[#0b0b0b] text-gray-400 px-6 md:px-20 lg:px-32 py-12">

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

                {/* About */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4 tracking-wide">
                        About Us
                    </h2>

                    <p className="text-sm leading-relaxed mb-5">
                        AS_CODERS is a creative tech team delivering modern, scalable,
                        and elegant digital solutions for businesses and startups.
                    </p>

                    {/* Contact Icons */}
                    <div className="space-y-3 text-sm">
                        <a
                            href="mailto:ascoders@gmail.com"
                            className="flex items-center gap-3 hover:text-white transition"
                        >
                            <MdEmail className="text-lg text-gray-400 hover:text-blue-400 transition" />
                            ascoders@gmail.com
                        </a>

                        <a
                            href="tel:+919999999999"
                            className="flex items-center gap-3 hover:text-white transition"
                        >
                            <MdPhone className="text-lg text-gray-400 hover:text-green-400 transition" />
                            +91 99999 99999
                        </a>
                    </div>
                </div>

                {/* Company Links */}
                <div className="md:pl-8">
                    <h2 className="text-white text-xl font-semibold mb-5 tracking-wide">
                        Company
                    </h2>

                    <ul className="space-y-4 text-sm">
                        {["Home", "Services", "About", "Contact"].map((item) => (
                            <li key={item}>
                                <a
                                    href="#"
                                    className="group inline-flex items-center gap-3 text-gray-400
                  hover:text-white transition-all duration-300"
                                >
                                    <span
                                        className="h-1.5 w-1.5 rounded-full bg-gray-600
                    group-hover:bg-white
                    group-hover:scale-125
                    transition-all duration-300"
                                    ></span>

                                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                                        {item}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Icons */}
                <div>
                    <h2 className="text-white text-xl font-semibold mb-4 tracking-wide">
                        Follow Us
                    </h2>

                    <div className="flex gap-6 mt-1">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook className="text-2xl text-gray-400 hover:text-blue-500 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all duration-300" />
                        </a>

                        <a href="#" aria-label="X">
                            <FaSquareXTwitter className="text-2xl text-gray-400 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />
                        </a>

                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all duration-300" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
                <p>
                    &copy; {new Date().getFullYear()} AS_CODERS. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
