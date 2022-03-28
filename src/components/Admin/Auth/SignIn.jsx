import React, { useState } from "react";
import axios from "axios";

import { LazyLoadImage } from 'react-lazy-load-image-component';

// Icons
import adminsignin from '../../../assets/svg/adminsignin.svg';

// Components
import Header from './Header.jsx';

const SignIn = () => {

    const [error, setError] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleHeader = (res) => {
        if (res.data) {
            localStorage.setItem("adminAuth", res.headers["authorization"]);

            window.location = '/admin-dashboard';
        }
    };

    const signinAdmin = (e) => {
        const url = 'http://127.0.0.1:3000/admins/sign_in';
        e.preventDefault();

        axios
            .post(url, {
                admin: {
                    email: email,
                    password: password
                }
            })
            .then((res) => handleHeader(res))
            .catch((e) => {
                setError(e.response.data.error);
                console.log(e.response.data.error);
            })
    };

    return (
        <div className="overflow-hidden min-h-screen">
            <Header />
            <div className="admin__signin__container min-h-full flex items-center text-center justify-center py-12 px-4 custom:py-8 sm:px-6 lg:px-8">
                <div className="admin__signin__container--form max-w-md w-full space-y-8 rounded-lg px-16 py-8 lg:max-w-xl">
                    <div>
                        <LazyLoadImage
                            className="w-68"
                            alt="admin svg"
                            src={adminsignin}
                        />
                        <hr className="bg-green-900 h-1" />
                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Welcome Back JNCE Admin!</h2>
                        <br />
                        {error ? (
                            <span className="text-red-700 font-semibold">{error}</span>
                        ) : (
                            <span></span>
                        )}
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={signinAdmin}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                            </div>
                            <br />
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between custom:gap-4 sm:gap-0">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-md custom:text-sm sm:text-md md:text-md text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-md custom:text-sm sm:text-md">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <input
                                type="submit"
                                className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                                value="Sign in Now"
                            />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
