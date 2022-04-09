import React, { useState, useEffect } from 'react'
import axios from 'axios'


// Components
import Header from '../Header.jsx';

const ViewLogs = () => {
    const url = `${process.env.REACT_APP_JNCE_BASE_URL}`;
    const Token = localStorage.getItem("adminAuth");
    const [LogLists, setLogLists] = useState([]);
    const [service, setService] = useState([]);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormat;

    useEffect(() => {
        axios
            .get(`${url}/api/v1/logs`, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                setLogLists(res.data.data)
            }
            )
            .catch((err) => {
                console.log(err)
            })

        axios
            .get(`${url}/api/v1/services`, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                setService(res.data.data)
            }
            )
            .catch((err) => {
                console.log(err)
            })

    }, []);

    const handleLogs = (e) => {
        const logs_id = e.target.id
        axios
            .get(`${url}/api/v1/logs/${logs_id}`, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                localStorage.setItem("logs_identifier", JSON.stringify(res.data.data));
                window.location = '/show-event-logs';
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <Header />
            <br /><br />

            <div className="user__feedback--title max-w-7xl md:w-[90%]">
                <h1 className="text-left font-bold text-2xl custom:text-lg">Appointment Logs</h1>
            </div>

            <br />

            <div className="feedback__table relative max-w-7xl overflow-x-auto shadow-md sm:rounded-lg md:w-[90%]">
                <table className="w-full text-left">
                    <thead className="text-md bg-green-300 rounded text-black font-semibold capitalize">
                        <tr className="text-md">
                            <th scope="col" className="px-6 py-3">
                                Fullname
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
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
                            <th scope="col" className="px-6 py-3">
                                JNCE admin
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {LogLists.length ? (
                            LogLists.map((value, index) => (
                                <tr key={index} className="bg-white border-b dark:border-gray-700 dark:hover:bg-gray-100">
                                    <td className="px-6 py-4 text-sm">
                                        <strong>{value.attributes.appointment.fullname}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong>{value.attributes.appointment.email}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong>
                                            {
                                                service.length ? service[value.attributes.appointment.service_id - 1].attributes.name
                                                    : value.attributes.appointment.service_id
                                            }
                                        </strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong className="whitespace-nowrap">
                                            {
                                                dateFormat = new Date(value.attributes.appointment.start_datetime).toLocaleString('en', { timeZone: 'UTC' })
                                            }
                                        </strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong>{value.attributes.appointment.status}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong>{value.attributes["status-change-by"].name}</strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <p id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                            onClick={handleLogs}
                                        >
                                            View
                                        </p>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <>
                                <td className="text-center font-bold text-lg p-8" colSpan="7">No record found!</td>
                            </>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewLogs
