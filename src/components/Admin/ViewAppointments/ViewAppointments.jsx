import React, { useState, useEffect } from 'react';
import axios from 'axios'

// Components
import Header from '../Header.jsx';
import AppointmentList from './AppointmentList'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ViewAppointments = () => {

    /* State Management */
    const [getAppointments, setAppointments] = useState([]);
    const [search, setSearchKeyword] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const url = `${process.env.REACT_APP_JNCE_BASE_URL}`;
    const Token = localStorage.getItem("adminAuth");
    const adminIdentifier = localStorage.getItem("adminIdentifier");
   
    useEffect(() => {
        axios
            .get(`${url}/api/v1/appointments`, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                setAppointments(res.data.data);
                console.log(res.data.data);
            }
            )
            .catch((err) => {
                console.log(err)
            })

    }, []);

    const handleAppointment = (e) => {
        const appntment_id = e.target.id;
        axios
            .get(`${url}/api/v1/appointments/${appntment_id}`, {
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
                            .put(`${url}/api/v1/appointments/${id}`, {
                                status: 'done'
                            })
                            .then((res) => {
                                localStorage.setItem('statusmsg', JSON.stringify(res.data.message))
                            })
                            .catch((err) => {
                                console.log(err)
                            })

                        axios
                            .post(`${url}/api/v1/logs`, {
                                appointment_id: id,
                                admin_id: adminIdentifier
                            })
                            .then((res) => {
                                console.log(res)
                                window.location.reload();
                            })
                            .catch(err => console.log(err))

                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };

    const handleSearchEmail = (e) => {
        setSearchKeyword(e.target.value)

        const filteredEmail = getAppointments.filter((i) => {
            return i.attributes.email.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setFilteredList(filteredEmail)
        console.log(filteredEmail)
    }

    return (
        <>
            <Header />

            <br /><br />

            <div className="user__feedback--title max-w-7xl flex gap-8 md:w-[90%] custom:flex-col gap-1 2xl:gap-8">
                <h1 className="text-left font-bold text-2xl custom:text-lg">JNCE Appointment Lists</h1>
                <input
                    type="search"
                    placeholder='🔍 Search Email Address'
                    value={search}
                    onChange={handleSearchEmail}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 pl-2 p-2 custom:w-full mt-[0.125rem] 2xl:w-1/2 mt-0" />
            </div>

            <br />

            <div className="feedback__table relative max-w-7xl overflow-x-auto shadow-md sm:rounded-lg md:w-[90%]">
                < AppointmentList
                 getAppointments={getAppointments}
                 filteredList={filteredList}
                 onHandleAppointment={handleAppointment}
                 onHandleChangeStatus={handleChangeStatus}
                 
                />
            </div>
        </>
    )
}

export default ViewAppointments;
