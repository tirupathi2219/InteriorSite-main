import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { NavLinks, serviceData } from '../utils/servicesData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 bg-white text-gray-800">
            {/* Logo and Name */}
            <div className="flex items-center">
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-12 rounded-full"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                />
                <motion.h1
                    className="text-xl hidden lg:flex font-bold hover:scale-110 hover:text-[#ab8925] transition-transform duration-300 font-serif"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    Halchemy Interior
                </motion.h1>
            </div>

            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex space-x-4">
                {NavLinks.map((link, ind) => (
                    <motion.li
                        key={link}
                        whileHover={{ scale: 1.1 }}
                        className="relative hover:text-[#ab8925] text-gray-800 font-bold text-lg transition duration-300 font-serif"
                    >
                        {ind === 1 ? (
                            <div
                                onMouseEnter={() => setShowMenu(true)}
                                onMouseLeave={() => setShowMenu(false)}
                                className="relative"
                            >
                                <a href={`${link.path}`} className="cursor-pointer">
                                    {link.title} <span>+</span>
                                </a>

                                {/* Dropdown menu for Services */}
                                {showMenu && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2"
                                    >
                                        {serviceData.map((service) => (
                                            <li key={service.id} className="py-1 px-2 hover:bg-gray-200 rounded">
                                                <a href={`services`} className="text-gray-700">
                                                    {service.title}
                                                </a>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </div>
                        ) : (
                            <a href={`${link.path}`} className="">{link.title}</a>
                        )}
                    </motion.li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
                className="md:hidden flex flex-col space-y-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10 p-4"
                >
                    <ul className="flex flex-col space-y-4">
                        {['Home', 'Services', 'Testimonials', 'About Us', 'Contact Us'].map((link, ind) => (
                            <li key={link} className="font-bold text-lg text-gray-800">
                                {ind === 1 ? (
                                    <div>
                                        <div
                                            onClick={() => setShowSubMenu(!showSubMenu)}
                                            className="flex items-center justify-between cursor-pointer"
                                        >
                                            <span>{link}</span>
                                            <span>{showSubMenu ? '-' : '+'}</span>
                                        </div>

                                        {/* Accordion for Services submenu */}
                                        {showSubMenu && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                transition={{ duration: 0.3 }}
                                                className="pl-4 mt-2 space-y-2"
                                            >
                                                {serviceData.map((service) => (
                                                    <li key={service.id} className="text-gray-600 hover:text-[#ab8925]">
                                                        <a href={`#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                                                            {service.title}
                                                        </a>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </div>
                                ) : (
                                    <a href={`#${link.toLowerCase()}`} className="hover:text-[#ab8925]">
                                        {link}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </nav>
    );
}
