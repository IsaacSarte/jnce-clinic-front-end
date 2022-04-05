import React, { useState, useEffect } from 'react';

import axios from 'axios'

import { useJwt } from "react-jwt";
import { createAppointmentURL, getServicesURL } from '../../api/UserApi';

/* Components */
import Header from './Header';
import { SuccessModal } from './SuccessModal'; // appointment created successfully modal component

const Appointment = () => {

  /* State Management */
  const [fullname, setFullname] = useState('');
  const [title, setTitle] = useState('JNCE Medical Clinic Appointment');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('G/F CDC Bldg. 1195 Ma. Orosa St., Ermita Manila');

  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');

  const [appointment, setAppointment] = useState('');

  const [services, setServices] = useState([]);

  // Decrypting JWT
  const token_res = JSON.parse(localStorage.getItem('calendarOAuth'));
  const token = `${token_res.data.id_token}`;
  const { decodedToken } = useJwt(token);

  // Getting all JNCE Services
  useEffect(() => {
    axios
      .get(getServicesURL, {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        setServices(res.data.data);
      })
      .catch(err => console.log(err))
  }, [])

  const hanleSubmitEvent = (e) => {
    e.preventDefault()

    const access_token = `${token_res.data.access_token}`
    axios.post(`${createAppointmentURL}/create-event`, {
      title,
      description,
      location,
      startDateTime,
      endDateTime,
      access_token
    })
      .then(res => {
        console.log(res.data);
        setAppointment('You are Successfully Scheduled!');
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <form onSubmit={hanleSubmitEvent}>

        <label htmlFor='email'>Email:</label><br />
        <p>{decodedToken ? decodedToken.email : ''}</p>
        <br />

        <label htmlFor='fullname'>Fullname:</label><br />
        <input type="text"
          id="fullname"
          value={fullname}
          onChange={e => setFullname(e.target.value)}
        /> <br />

        <label htmlFor='title'>Title:</label><br />
        <p>{title}</p>
        <br />

        <label htmlFor='services'>Choose Service Type:</label><br />
        <select
          name="services"
          id="services"
          value={description}
          onChange={e => setDescription(e.target.value)}
        >
          <option value="" selected disabled hidden>---</option>
          {services.length ? (
            services.map((value, index) => (
              <option id={value.id}>{value.attributes.name}</option>
            ))
          ) : (
            <>
              <td className="text-center font-bold text-lg p-8" colspan="5">No Services Record Found at this Moment <br /> Please try again later.</td>
            </>
          )}
        </select>

        <br /><br />

        <label htmlFor='location'>Location:</label><br />
        <p>{location}</p>
        <br />

        <label htmlFor='startDateTime'>Choose Date:</label><br />
        <input type="datetime-local"
          id="startDateTime"
          value={startDateTime}
          onChange={e => (setStartDateTime(e.target.value), setEndDateTime(e.target.value))}
        /><br /><br />

        <input
          type="submit"
          value="Schedule Appointment"
        />
        {
          appointment ? (
            <SuccessModal
              appointment={appointment}
            />
          ) : (
            null
          )
        }
      </form >
    </>
  )
}

export default Appointment
