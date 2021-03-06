import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import AdminAuthAPI from "../../services/AdminAuthAPI";
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
import { EventIcon } from '../../subComponents/AllSvg.jsx';

// Images
import jnce_logo from '../../assets/images/jnce-logo.png';

// Static Datas
const solutions = [
    {
        name: 'Feedbacks',
        href: '/view-feedbacks',
        icon: FeedbackIcon,
    },
    {
        name: 'Appointments',
        href: '/view-appointments',
        icon: AppointmentIcon,
    },
    {
        name: 'Event-logs',
        href: '/view-event-logs',
        icon: EventIcon,
    },
    {
        name: 'Add admin',
        href: '/create-admin',
        icon: AddIcon,
    },
    {
        name: 'Update admin',
        href: '/update-admin',
        icon: EditIcon,
    }
]

const admins = [
    {
        name: 'Add Admin',
        href: '/create-admin',
        icon: AddIcon,
    },
    {
        name: 'Update Admin',
        href: '/update-admin',
        icon: EditIcon,
    }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    const handleLogout = () => {
        AdminAuthAPI.logout();
        window.location = "/admin-signin"
    }

    return (
        <header className="header__container sticky top-0">

            <Popover className="relative bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <NavLink to="/admin-dashboard">
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

                        <Popover.Group as="nav" className="hidden md:flex space-x-10">

                            <NavLink
                                to="/view-feedbacks"
                                className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">
                                Feedbacks
                            </NavLink>
                            <NavLink
                                to="/view-appointments"
                                className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">
                                Appointments
                            </NavLink>
                            <NavLink
                                to="/view-event-logs"
                                className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">
                                Event-Logs
                            </NavLink>
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : 'text-gray-500',
                                                'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700'
                                            )}
                                        >
                                            <span className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">Admin</span>
                                            <ChevronDownIcon
                                                className={classNames(
                                                    open ? 'text-gray-600' : 'text-gray-400',
                                                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                                                )}
                                                aria-hidden="true"
                                            />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {admins.map((item) => (
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            >
                                                                <item.icon className="flex-shrink-0 h-6 w-6 text-green-700" aria-hidden="true" />
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                </div>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>

                        </Popover.Group>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <p
                                onClick={handleLogout}
                                className=" cursor-pointer whitespace-nowrap text-base font-medium text-gray-800 hover:text-gray-900 md:text-sm lg:text-xl"
                            >
                                Sign out
                            </p>
                            <NavLink
                                to="/view-patients"
                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800"
                            >
                                See Patients
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
                                <div className="mt-6">
                                    <nav className="grid gap-y-8">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                            >
                                                <item.icon className="flex-shrink-0 text-green-600" aria-hidden="true" />
                                                <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5 space-y-6">
                                <div>
                                    <NavLink
                                        to="/view-patients"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800"
                                    >
                                        See Patients
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
