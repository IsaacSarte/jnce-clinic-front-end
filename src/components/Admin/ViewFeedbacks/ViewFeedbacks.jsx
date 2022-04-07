import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { getFeedbackURL } from '../../../api/AdminApi.jsx';

// Components
import Header from '../Header.jsx';

const ViewFeedbacks = () => {

    const [getFeedbacks, setGetFeedbacks] = useState([]);
    const [showFeedbacks, setShowFeedbacks] = useState([]);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let feedbackDate;

    useEffect(() => {
        const Token = localStorage.getItem("adminAuth");
        axios
            .get(getFeedbackURL, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                console.log(res);
                setGetFeedbacks(res.data.data);
            }
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

            <div className="feedback__table relative max-w-7xl overflow-x-auto shadow-md sm:rounded-lg md:w-3/4">
                <table className="w-full text-left">
                    <thead className="text-lg bg-green-300 rounded text-black font-semibold uppercase">
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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {getFeedbacks.length ? (

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
                                        <strong>
                                            {
                                                feedbackDate = new Date(value.attributes.feedback[0].created_at).toLocaleDateString("en-US", options)
                                            }
                                        </strong>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p id={`${value.id}`} className="cursor-pointer font-bold text-base text-center text-blue-400 hover:text-green-300 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                            onClick={handleMessage}
                                        >
                                            View
                                        </p>
                                    </td>
                                </tr>
                            ))

                        ) : (
                            <>
                                <td className="text-center font-bold text-lg p-8" colspan="5">No User Feedback Record Found !</td>
                            </>
                        )}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ViewFeedbacks
