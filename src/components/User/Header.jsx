import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import UserAuthAPI from "../../services/UserAuthAPI";
import { Popover, Transition } from '@headlessui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Icons
import { MenuIcon } from '../../subComponents/AllSvg.jsx'; // for Menubar on Header
import { CloseIcon } from '../../subComponents/AllSvg.jsx'; // for Close Menubar on Header

import { AppointmentIcon } from '../../subComponents/AllSvg.jsx';
import { FeedbackIcon } from '../../subComponents/AllSvg.jsx';

import { ChevronDownIcon } from '@heroicons/react/solid';

import { AdminIcon } from '../../subComponents/AllSvg.jsx';

import { AddIcon } from '../../subComponents/AllSvg.jsx';
import { EditIcon } from '../../subComponents/AllSvg.jsx';

import { PatientIcon } from '../../subComponents/AllSvg.jsx';

// Images
import jnce_logo from '../../assets/images/jnce-logo.png';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    const handleLogout = () => {
        UserAuthAPI.logout();
        window.location = "/"
    }

    return (
        <header className="header__container sticky top-0">

            <Popover className="relative bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink to="/">
                                <span className="sr-only">JNCE Medical Clinic</span>
                                <LazyLoadImage
                                    className="h-14 w-auto sm:h-12"
                                    alt="JNCE Logo"
                                    src={jnce_logo}
                                />
                            </NavLink>
                        </div>

                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <p
                                onClick={handleLogout}
                                className=" cursor-pointer whitespace-nowrap text-base font-medium text-gray-800 hover:text-gray-900 md:text-sm lg:text-xl"
                            >
                                Sign out
                            </p>
                            <NavLink
                                to="/create-event"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800"
                            >
                                New Appointment
                            </NavLink>
                        </div>

                    </div>

                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <LazyLoadImage
                                            className="h-10 w-auto sm:h-12"
                                            alt="JNCE Logo"
                                            src={jnce_logo}
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
                                            <span className="sr-only">Close menu</span>
                                            <CloseIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>

                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div>
                                    <NavLink
                                        to="/create-event"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800"
                                    >
                                        New Appointment
                                    </NavLink>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        <p
                                            onClick={handleLogout}
                                            className="text-green-700 hover:text-green-600"
                                        >
                                            Sign out
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>

            </Popover>

        </header>
    )
}

export default Header;
