import React from 'react'

import Header from '../Header.jsx';

const ShowAppointments = () => {

    
    const data = JSON.parse(localStorage.getItem("appointment_identifier"));
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormat;


    return (
        <>
            <Header />

            <br /><br />

            <div className="feedback__table__show bg-green-300 max-w-7xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-xl leading-6 font-bold uppercase text-black">User Appointments Details</h3>
                    <p className="mt-1 max-w-2xl text-md font-semibold text-gray-900">Appointment Information</p>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Email address</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{data[0].attributes.email}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Fullname</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{data[0].attributes.fullname}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Service Type</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{data[0].attributes.service.name}</dd>
                        </div>                        
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Scheduled Date</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                {
                                    dateFormat = new Date(data[0].attributes["start-datetime"]).toLocaleDateString("en-US", options)
                                }
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Date Creation</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                {
                                    dateFormat = new Date(data[0].attributes["created-at"]).toLocaleDateString("en-US", options)
                                }
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Status</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{data[0].attributes.status}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            
        </>
    )
}

export default ShowAppointments
