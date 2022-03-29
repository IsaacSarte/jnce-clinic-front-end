import React, { useState } from "react";
import axios from "axios";

import { LazyLoadImage } from 'react-lazy-load-image-component';

// Icons
import createadmin from '../../../assets/svg/createadmin.svg';

// Components
import Header from '../Header.jsx';
import { SuccessModal } from "../../../subComponents/Admin/SuccessModal.jsx";

const CreateAdmin = () => {

    const [getStatus, setGetStatus] = useState('');

    // Error Messages
    const [error, setError] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createAdmin = (e) => {
        const url = 'http://127.0.0.1:3001/admins/';
        e.preventDefault();

        axios
            .post(url, {
                admin: {
                    email: email,
                    password: password
                }
            })
            .then((res) => {
                setGetStatus(res.data.message)
            })
            .catch((e) => {
                setError(e.response.data.message)
            })
    }

    return (
        <>
            <Header />
            <div className="overflow-hidden">
                <div className="admin__signin__container min-h-full flex items-center justify-center py-12 px-4 custom:py-8 sm:px-6 lg:px-8">
                    <div className="admin__signin__container--form max-w-md w-full space-y-8 rounded-lg px-16 py-8 lg:max-w-xl">
                        <div>
                            <LazyLoadImage
                                className="createadminsvg w-72 md:w-40 custom:w-40"
                                alt="admin svg"
                                src={createadmin}
                            />
                            <hr className="bg-green-900 h-1" />
                            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Add another JNCE Admin!</h2>
                            <br />
                            {error ? (
                                <span>{error.map((fullErr, index) => (
                                    <li className="list-none text-red-700 font-semibold my-1" key={index}>
                                        <span>{`${fullErr}`}</span>
                                    </li>
                                ))}</span>
                            ) : (
                                <span></span>
                            )}
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={createAdmin}>
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
                            <div>
                                <input
                                    type="submit"
                                    className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                                    value="Add Admin Now"
                                />
                                {getStatus ? (
                                    <SuccessModal
                                        getStatus={getStatus}
                                        setEmail={setEmail}
                                        setPassword={setPassword}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateAdmin;
