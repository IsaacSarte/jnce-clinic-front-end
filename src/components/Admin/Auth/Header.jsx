import React from 'react';
import { NavLink } from 'react-router-dom';

import { Popover } from '@headlessui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Images
import jnce_logo from '../../../assets/images/jnce-logo.png';

const Header = () => {
    return (
        <header className="header__container sticky top-0">

            <Popover className="relative bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink to="/admin-signin">
                                <span className="sr-only">JNCE Medical Clinic</span>
                                <LazyLoadImage
                                    className="h-14 w-auto sm:h-12"
                                    alt="JNCE Logo"
                                    src={jnce_logo}
                                />
                            </NavLink>
                        </div>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <NavLink
                                to="/"
                                className="whitespace-nowrap text-base font-medium text-gray-800 hover:text-gray-900 md:text-sm lg:text-xl"
                            >
                                JNCE Medical and Diagnostic Clinic
                            </NavLink>

                        </div>

                    </div>

                </div>

            </Popover>

        </header>
    )
}

export default Header;
