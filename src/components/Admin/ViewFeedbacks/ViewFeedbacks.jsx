import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { getFeedbackURL } from '../../../api/AdminApi.jsx';

// Components
import Header from '../Header.jsx';

const ViewFeedbacks = () => {

    const [getFeedbacks, setGetFeedbacks] = useState([]);
    const [showFeedbacks, setShowFeedbacks] = useState([]);

    useEffect(() => {
        const Token = localStorage.getItem("adminAuth");
        axios
            .get(getFeedbackURL, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) =>
                console.log(res.data.data)
            )
            .catch((e) => {
                console.log(e)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const Token = localStorage.getItem("adminAuth");
        axios
            .get(getFeedbackURL, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) =>
                setGetFeedbacks(res.data.data)
            )
            .catch((e) => {
                console.log(e)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleMessage = (e) => {
        const Token = localStorage.getItem("adminAuth");
        console.log(e.target.id)
        const userIdentifier = e.target.id;

        const getUserDataURL = `${getFeedbackURL}/${userIdentifier}`
        axios
            .get(getUserDataURL, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem("userIdentifier", JSON.stringify(res.data.data));
                window.location = '/show-feedback';
                setShowFeedbacks(res.data.data);
            })
            .catch((e) => {
                console.log(e)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    return (
        <>
            <Header />

            <br /><br />

            <div className="feedback__table relative max-w-7xl overflow-x-auto shadow-md sm:rounded-lg custom:max-w-sm">
                <table className="w-full text-left">
                    <thead className="text-lg bg-slate-300 rounded text-black font-semibold uppercase">
                        <tr className="text-md">
                            <th scope="col" className="px-6 py-3">
                                Email Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fullname
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">View</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            getFeedbacks.map((value, index) => (
                                <tr className="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-green-800 dark:hover:text-white">
                                    <td className="px-6 py-4">
                                        <strong>{value.attributes.email}</strong>
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{value.attributes.fullname}</strong>
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>+{value.attributes.phone}</strong>
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{value.attributes.feedback[0].created_at}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <p id={`${value.id}`} className="cursor-pointer font-bold text-lg transition-all duration-75 ease-in hover:scale-110 uppercase"
                                            onClick={handleMessage}
                                        >
                                            View
                                        </p>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ViewFeedbacks
