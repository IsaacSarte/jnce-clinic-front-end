import React, { Fragment, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

// Icons
import { MenuIcon } from '../subComponents/AllSvg.jsx'; // for Menubar on Header
import { CloseIcon } from '../subComponents/AllSvg.jsx'; // for Close Menubar on Header

import { HomeIcon } from '../subComponents/AllSvg.jsx';
import { AboutIcon } from '../subComponents/AllSvg.jsx';
import { ServiceIcon } from '../subComponents/AllSvg.jsx';
import { ContactIcon } from '../subComponents/AllSvg.jsx';

// Images
import jnce_logo from '../assets/images/jnce-logo.png';

// Static Datas
const solutions = [
    {
        name: 'Home',
        href: '#home',
        icon: HomeIcon,
    },
    {
        name: 'About Us',
        href: '#about',
        icon: AboutIcon,
    },
    {
        name: 'Services',
        href: '#services',
        icon: ServiceIcon,
    },
    {
        name: 'Contact Us',
        href: '#contact',
        icon: ContactIcon,
    }
]

const resources = [
    {
        name: 'Help Center',
        href: '#',
    },
    {
        name: 'Guides',
        href: '#',
    },
    {
        name: 'Events',
        href: '#',
    },
    {
        name: 'Security',
        href: '#',
    }
]

const Header = () => {

    useEffect(() => {
        axios
            .get('https://testcal.vercel.app/api/test')
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }, [])

    const userToken = localStorage.getItem('calendarOAuth');

    userToken !== null ?
        console.log('UserToken: exists') :
        console.log('UserToken: null');

    const responseGoogle = response => {

        console.log(response)

        const { code } = response
        axios
            .post('https://testcal.vercel.app/api/test/create-tokens', { code })
            .then(response => {
                localStorage.setItem('calendarOAuth', JSON.stringify(response))
                window.location = '/create-event'
            })
            .catch(error => console.log(error.message))

    }

    const responseUserAuth = () => {
        window.location = '/create-event'
    }

    const responseError = response => {
        console.log(response)
    }

    return (
        <header className="header__container sticky top-0">

            <Popover className="relative bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="/">
                                <span className="sr-only">JNCE Medical Clinic</span>
                                <LazyLoadImage
                                    className="h-14 w-auto sm:h-12"
                                    alt="JNCE Logo"
                                    src={jnce_logo}
                                />
                            </a>
                        </div>

                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600">
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>

                        <Popover.Group as="nav" className="hidden md:flex space-x-10">

                            <a
                                href="#home"
                                className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">
                                Home
                            </a>
                            <a
                                href="#about"
                                className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">
                                About Us
                            </a>
                            <a
                                href="#services"
                                className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">
                                Services
                            </a>
                            <a
                                href="#contact"
                                className="text-base font-medium text-gray-700 hover:text-gray-900 md:text-sm lg:text-xl">
                                Contact Us
                            </a>

                        </Popover.Group>

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <a
                                href="/"
                                className="whitespace-nowrap hidden text-base font-medium text-gray-800 hover:text-gray-900 md:text-sm lg:text-xl"
                            >
                                Sign in
                            </a>
                            {userToken !== null ? (
                                <button
                                    className="user__signed__in__btn bg-green-700 text-white font-semibold hover:bg-green-600"
                                    onClick={responseUserAuth}
                                >
                                    Book Appointment
                                </button>
                            ) : (
                                <GoogleLogin
                                    className='google__login'
                                    clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
                                    buttonText='Book Appointment'
                                    onSuccess={responseGoogle}
                                    fetchBasicProfile
                                    onFailure={responseError}
                                    cookiePolicy={'single_host_origin'}
                                    theme='light'
                                    responseType='code'
                                    accessType='offline'
                                    scope={`openid email profile ${process.env.REACT_APP_GOOGLE_CALENDAR_URL}`}
                                />
                            )}

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
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Pricing
                                    </a>

                                    <a href="/" className="text-base font-medium text-gray-900 hover:text-gray-700">
                                        Docs
                                    </a>
                                    {resources.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div>
                                    {userToken !== null ? (
                                        <button
                                            className="user__signed__in__btn w-full flex justify-center bg-green-700 text-white font-semibold hover:bg-green-600"
                                            onClick={responseUserAuth}
                                        >
                                            Book Appointment
                                        </button>
                                    ) : (
                                        <GoogleLogin
                                            className='google__login w-full flex justify-center'
                                            id='login' clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
                                            buttonText='Book Appointment'
                                            onSuccess={responseGoogle}
                                            onFailure={responseError}
                                            cookiePolicy={'single_host_origin'}
                                            theme='light'
                                            responseType='code'
                                            accessType='offline'
                                            scope={`openid email profile ${process.env.REACT_APP_GOOGLE_CALENDAR_URL}`}
                                        />
                                    )}
                                    <p className="mt-6 text-center text-base font-medium text-gray-500 hidden">
                                        Existing customer?{' '}
                                        <a
                                            href="/"
                                            className="text-green-700 hover:text-green-600"
                                        >
                                            Sign in
                                        </a>
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
