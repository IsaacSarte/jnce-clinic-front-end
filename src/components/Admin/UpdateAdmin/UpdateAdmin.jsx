import React, { useState, useEffect } from 'react';
import axios from "axios";


import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SuccessModal } from './SuccessModal'

// Icons
import updateadmin from '../../../assets/svg/updateadmin.svg';

// Components
import Header from '../Header.jsx';
import Footer from '../Footer';

const UpdateAdmin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [err, setErr] = useState([]);
    const [updateMessage, setUpdateMessage] = useState('');

    const baseURL = process.env.REACT_APP_JNCE_BASE_URL;
    const Identifier = localStorage.getItem("adminIdentifier");
    const Token = localStorage.getItem("adminAuth");

    useEffect(() => {
        const url = `${baseURL}/api/v1/admin/${Identifier}`;
        axios
            .get(url, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => (setEmail(res.data.email), setUsername(res.data.name), console.log(res)))
            .catch((e) => {
                console.log(e)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault();
        const url = `${baseURL}/api/v1/admin/${Identifier}`;
        axios
            .put(url, {
                headers: {
                    Authorization: Token
                },
                admin: {
                    name: username,
                    email: email,
                    password: password
                }
            })
            .then((res) => {
                setUpdateMessage(res.data.message)
            })
            .catch((e) => {
                setErr(e.response.data.data.message.password)
            })
    }

    return (
        <>
            <Header />
            <div className="overflow-hidden">
                <div className="admin__signin__container flex items-center text-center justify-center py-12 px-4 custom:py-8 sm:px-6 lg:px-8">
                    <div className="admin__signin__container--form shadow-lg max-w-md w-full space-y-8 rounded-lg px-16 py-8 lg:max-w-xl">
                        <div>
                            <LazyLoadImage
                                className="updateadminsvg w-72 custom:w-40 md:w-40 lg:w-60"
                                alt="admin svg"
                                src={updateadmin}
                            />
                            <hr className="bg-green-900 h-1" />
                            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Update your account!</h2>
                            <br />
                        </div>

                        <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="username" className="sr-only">
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        autoComplete="username"
                                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                                <br />
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
                                        value={email}
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
                                        placeholder="Please type your new password"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="text-left">
                                    {err ? (
                                        <span>{err.map((val, index) => (
                                            <li className="list-none text-red-700 font-semibold my-1" key={index}>
                                                <span>{`Password ${val}`}</span>
                                            </li>
                                        ))}</span>
                                    ) : (
                                        <span></span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    className="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
                                    value="Update"
                                />
                                {updateMessage ? (
                                    <SuccessModal
                                        updateMessage={updateMessage}
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
            <Footer />
        </>
    )
}

export default UpdateAdmin
