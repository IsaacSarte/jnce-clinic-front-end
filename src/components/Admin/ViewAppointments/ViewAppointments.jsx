import React, { useState, useEffect } from 'react';
import axios from 'axios'

// Components
import Header from '../Header.jsx';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ViewAppointments = () => {

    const [getAppointments, setAppointments] = useState([]);
    const url = `${process.env.REACT_APP_JNCE_BASE_URL}/api/v1/appointments`;
    const Token = localStorage.getItem("adminAuth");
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormat;

    useEffect(() => {

        axios
            .get(url, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                setAppointments(res.data.data);
            }
            )
            .catch((err) => {
                console.log(err)
            })

    }, []);


    const handleAppointment = (e) => {
        const appntment_id = e.target.id;
        axios
            .get(`${url}/${appntment_id}`, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                localStorage.setItem("appointment_identifier", JSON.stringify(res.data.data));
                window.location = '/show-appointments';
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleChangeStatus = (e) => {
        let id = e.target.id
        confirmAlert({
            title: 'Are you sure ?',
            message: 'This action takes appointment well done.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios
                            .put(`${url}/${id}`, {
                                status: 'done'
                            })
                            .then((res) => {
                                localStorage.setItem('statusmsg', JSON.stringify(res.data.message))
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                        window.location.reload();
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    return (
        <>
            <Header />

            <br /><br />

            <div className="user__feedback--title max-w-7xl md:w-[90%]">
                <h1 className="text-left font-bold text-2xl custom:text-lg">All JNCE Appointments</h1>
            </div>

            <br />

            <div className="feedback__table relative max-w-7xl overflow-x-auto shadow-md sm:rounded-lg md:w-[90%]">
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
                                Date Booked
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-center" colspan="2">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {getAppointments.length ? (

                            getAppointments.map((value, index) => (
                                <tr className="bg-white border-b dark:border-gray-700 dark:hover:bg-gray-100">
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
                                                dateFormat = new Date(value.attributes["start-datetime"]).toLocaleDateString("en-US", options)
                                            }
                                        </strong>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <strong className="whitespace-nowrap">
                                            {
                                                dateFormat = new Date(value.attributes["created-at"]).toLocaleDateString("en-US", options)
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
                                            onClick={handleAppointment}
                                        >
                                            View
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        {value.attributes.status === 'pending' ? (
                                            <span id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                                onClick={handleChangeStatus}
                                            >
                                                Done
                                            </span>
                                        ) : (
                                            <span></span>
                                        )}
                                    </td>

                                </tr>
                            ))

                        ) : (
                            <>
                                <td className="text-center font-bold text-lg p-8" colspan="7">No record found!</td>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewAppointments;
