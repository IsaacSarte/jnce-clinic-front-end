import React, { useState } from 'react'

const AppointmentList = ({getAppointments = [], filteredList= [], onHandleAppointment, onHandleChangeStatus}) => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormat;

  return (
    <>
        <table className="w-full text-left">
            <thead className="text-md bg-green-300 rounded text-black font-semibold capitalize">
                <tr className="text-md">
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Fullname
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Service Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Scheduled Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-center" colSpan="2">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredList.length ? (
                 filteredList.map((value, index) => (
                        <tr key={index} className="bg-white border-b dark:border-gray-700 dark:hover:bg-gray-100">
                            <td className="px-6 py-4 text-sm">
                                <strong>{value.attributes.email}</strong>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <strong>{value.attributes.fullname}</strong>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <strong>{value.attributes.service.name}</strong>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <strong className="whitespace-nowrap">
                                    {
                                        dateFormat = new Date(value.attributes["start-datetime"]).toLocaleString('en', { timeZone: 'UTC' })
                                    }
                                </strong>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                    {value.attributes.status === 'pending' ? (
                                        <strong className="text-yellow-700">{value.attributes.status}</strong>
                                        ) : (
                                        <strong className="text-green-700">{value.attributes.status}</strong>
                                    )}
                            </td>
                            <td className="px-6 py-4 text-sm">
                                <p id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                    onClick={onHandleAppointment}
                                    >
                                    View
                                </p>
                            </td>
                            <td className="px-6 py-4 text-sm">
                                    {value.attributes.status === 'pending' ? (
                                    <span id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                    onClick={onHandleChangeStatus}
                                    >
                                    Done
                                    </span>
                                ) : (
                                    <span></span>
                                )}
                            </td>
                            </tr>
                            ))
                        ) 
                        : (
                        getAppointments.length ? (
                            getAppointments.map((value, index) => (
                                <tr key={index} className="bg-white border-b dark:border-gray-700 dark:hover:bg-gray-100">
                                    <td className="px-6 py-4 text-sm">
                                        <strong>{value.attributes.email}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong>{value.attributes.fullname}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong>{value.attributes.service.name}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong className="whitespace-nowrap">
                                        {
                                            dateFormat = new Date(value.attributes["start-datetime"]).toLocaleString('en', { timeZone: 'UTC' })
                                        }
                                        </strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {value.attributes.status === 'pending' ? (
                                        <strong className="text-yellow-700">{value.attributes.status}</strong>
                                        ) : (
                                        <strong className="text-green-700">{value.attributes.status}</strong>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <p id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                            onClick={onHandleAppointment}
                                        >
                                            View
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {value.attributes.status === 'pending' ? (
                                        <span id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                            onClick={onHandleChangeStatus}
                                        >
                                            Done
                                        </span>
                                        ) : (
                                        <span></span>
                                        )}
                                    </td>
                                    </tr>
                                    ))
                                    ) 
                                    : (
                                    <>
                                    <td className="text-center font-bold text-lg p-8" colSpan="7">No record found!</td>
                                    </>
                                    )
                            )}
                    </tbody>
            </table>
    </>
  )
}

export default AppointmentList
