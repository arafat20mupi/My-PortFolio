import React, { useState } from 'react';
import { Link } from 'react-scroll';

const pages = [
    { label: 'Home', path: 'home', offset: -105 },
    { label: 'About', path: 'about', offset: -105 },
    { label: 'Skills', path: 'skills', offset: -105 },
    { label: 'Services', path: 'services', offset: -80 },
    { label: 'Projects', path: 'portfolio', offset: -80 },
    { label: 'Contact', path: 'contact', offset: -90 },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home');

    const handleOpenNavMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (path) => {
        setActiveItem(path);
        setIsMenuOpen(false);
    };

    return (
        <div>
            <header className="fixed w-full bg-white bg-opacity-50 backdrop-blur-md shadow-none rounded-xl z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="text-purple-800 font-bold text-xl tracking-wider">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            onClick={() => handleMenuItemClick('home')}
                        >
                            Arafat Islam
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        {pages.map((page, index) => (
                            <Link
                                key={index}
                                to={page.path}
                                smooth={true}
                                offset={page.offset}
                                duration={500}
                                onClick={() => handleMenuItemClick(page.path)}
                                className={`font-medium text-base cursor-pointer ${activeItem === page.path ? 'text-purple-800' : 'text-black'}`}
                            >
                                {page.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="md:hidden flex items-center">
                        <button onClick={handleOpenNavMenu} className="text-purple-800 text-3xl">
                            ☰
                        </button>
                    </div>
                </div>
            </header>
            {isMenuOpen && (
                <nav className="fixed top-16 right-4 left-4 bg-white bg-opacity-90 backdrop-blur-md shadow-lg rounded-xl p-4 flex flex-col space-y-4 md:hidden z-50">
                    {pages.map((page, index) => (
                        <Link
                            key={index}
                            to={page.path}
                            smooth={true}
                            offset={page.offset}
                            duration={500}
                            onClick={() => handleMenuItemClick(page.path)}
                            className={`font-medium text-base cursor-pointer ${activeItem === page.path ? 'text-purple-800' : 'text-black'}`}
                        >
                            {page.label}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    );
}

export default Header;
