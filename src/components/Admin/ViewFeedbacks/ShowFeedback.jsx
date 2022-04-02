import React from 'react';

import Header from '../Header.jsx';

const ShowFeedback = () => {

    const userData = JSON.parse(localStorage.getItem("userIdentifier"));

    return (
        <>
            <Header />

            <br /><br />

            <div className="feedback__table__show bg-slate-300 max-w-7xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-xl leading-6 font-bold uppercase text-black">User Feedback Details</h3>
                    <p className="mt-1 max-w-2xl text-md font-semibold text-gray-700">Personal Details</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Fullname</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{userData.attributes.fullname}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Email address</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{userData.attributes.email}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Phone number</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">+{userData.attributes.phone}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Date</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{userData.attributes.feedback[0].created_at}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Feedback Message:</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                <ul role="list" className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                    <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        <div className="w-0 flex-1 flex items-center">
                                            {/* <PaperClipIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                                            <span className="ml-2 flex-1 w-0 truncate text-md">{userData.attributes.feedback[0].message}</span>
                                        </div>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </>
    )
}

export default ShowFeedback;
