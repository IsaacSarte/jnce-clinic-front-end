import React, { useState, useEffect } from 'react'
import axios from 'axios'

//component
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';


const ShowLogs = () => {
    const url = `${process.env.REACT_APP_JNCE_BASE_URL}`;
    const Token = localStorage.getItem("adminAuth");
    const data = JSON.parse(localStorage.getItem("logs_identifier"));
    const [service, setService] = useState([]);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateFormat;

    useEffect(() => {
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
    return (
        <>
            <Header />
            <br /><br />

            <div className="feedback__table__show bg-green-300 max-w-7xl shadow overflow-hidden sm:rounded-lg w-[90%] md:w-[90%]">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-xl leading-6 font-bold uppercase text-black">Appointment Logs information</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Service Type</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                {
                                    service.length ? service[data.attributes.appointment.service_id - 1].attributes.name
                                        : data.attributes.appointment.service_id
                                }</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Full name </dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{data.attributes.appointment.fullname}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">Sheduled date </dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">
                                {
                                    dateFormat = new Date(data.attributes.appointment.start_datetime).toLocaleString('en', { timeZone: 'UTC' })
                                }
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-gray-800">JNCE admin</dt>
                            <dd className="mt-1 text-md text-gray-900 sm:mt-0 sm:col-span-2">{data.attributes["status-change-by"].name}</dd>
                        </div>
                    </dl>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ShowLogs
