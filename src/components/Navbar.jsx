import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import logo from '../assets/logo.svg'
import { NavLinks, serviceData } from '../utils/servicesData';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const dropdownRef = useRef(null);
    const menuButtonRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
                setIsOpen(false);
                setShowSubMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
        setShowSubMenu(false);
    };

    const getServiceLink = (service) => {
        return `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (
        <nav className="nav-header flex items-center justify-between p-4 bg-white text-gray-800 sticky top-0 z-10">
            {/* Logo and Name */}
            <div className="flex items-center">
                <div className='w-28 overflow-hidden'>
                    <motion.img
                        src={logo}
                        alt="Logo"
                        className="h-full w-full"
                        style={{ transform: "scale(1.7)" }}
                    />
                </div>
                <motion.h1
                    className="text-xl hidden lg:flex font-bold font-serif ml-1.5"
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
                                //onMouseLeave={() => setShowMenu(false)}
                                className="relative"
                            >
                                <a href={`${link.path}`} className="cursor-pointer">
                                    {link.title}
                                </a>

                                {/* Dropdown menu for Services */}
                                {showMenu && (
                                    <motion.ul
                                        //onMouseEnter={() => setShowMenu(true)}
                                        onMouseLeave={() => setShowMenu(false)}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-0"
                                    >
                                        {serviceData.map((service) => (
                                            <li key={service.id} className="py-1 px-2 hover:bg-gray-200 rounded">
                                                <a href={getServiceLink(service)} className="text-gray-700">
                                                    {service.title}
                                                </a>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </div>
                        ) : (
                            <a onMouseEnter={() => setShowMenu(false)} href={`${link.path}`} className="">{link.title}</a>
                        )}
                    </motion.li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div
                ref={menuButtonRef}
                className="md:hidden flex flex-col space-y-1 cursor-pointer"
                onClick={toggleMenu}

            >
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    ref={dropdownRef}
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
                                                        <a href={getServiceLink(service)}>
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
