import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios'

import { useJwt } from "react-jwt";
import { createAppointmentURL, getServicesURL } from '../../api/UserApi';

/* Components */
import Header from './Header';
import { SuccessModal } from './SuccessModal'; // appointment created successfully modal component
import { ErrorModal } from './ErrorModal'; // appointment with error modal component
import Footer from './Footer';

// Multi Step Form
import { Stepper, StepLabel, Step } from '@material-ui/core';
import Profile from '../../subComponents/User/CreateAppointment/Profile/Profile';
import ServicePicker from '../../subComponents/User/CreateAppointment/ServicePicker/ServicePicker';
import DatePicker from '../../subComponents/User/CreateAppointment/DatePicker/DatePicker';
import { NoDateModal } from '../../subComponents/User/CreateAppointment/DatePicker/NoDateModal';

const Appointment = () => {

  /* State Management */
  const [fullname, setFullname] = useState('');
  const [title, setTitle] = useState('JNCE Medical Clinic Appointment');
  const [description, setDescription] = useState('');
  const [description_id, setDescriptionID] = useState(0);
  const [location, setLocation] = useState('G/F CDC Bldg. 1195 Ma. Orosa St., Ermita Manila');

  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');

  const [appointment, setAppointment] = useState('');

  const [services, setServices] = useState([]);

  /* Error Handlers */
  const [errorDate, setErrorDate] = useState('');
  const [noDateError, setNoDateError] = useState('');

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

    let currentDate = new Date().getTime();
    let startdateFormat = new Date(startDateTime).getTime();

    console.log('Curr: ' + currentDate)
    console.log('Start: ' + startdateFormat)

    if (startdateFormat < currentDate) {
      console.log('Invalid Date');
      currentDate = new Date().toLocaleDateString();
      console.log('Current Date: ' + currentDate);
      startdateFormat = new Date(startDateTime).toLocaleDateString();
      console.log('Start Date: ' + startdateFormat);
      setErrorDate("Oops, past date/s are not allowed");
    }
    else if (currentStep === 3 && !startDateTime) {
      console.log('No Date');
      setNoDateError("Schedule date is required.")
    }
    else {
      console.log('Valid Date');
      startdateFormat = new Date(startDateTime).toLocaleDateString();
      console.log('Start Date: ' + startdateFormat);
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

          axios.post(`${process.env.REACT_APP_JNCE_BASE_URL}/api/v1/appointments`, {
            service_id: description_id,
            status: 'pending',
            fullname: fullname,
            location: location,
            start_datetime: startDateTime,
            end_datetime: endDateTime,
            title: title,
            email: decodedToken.email
          }).then(res => {
            console.log(res)
            setAppointment('You are Successfully Scheduled!');

          }).catch(err => console.log(err))

        })
        .catch(err => console.log(err))
    }

  }

  const [currentStep, setCurrentStep] = useState(1);

  console.log('Current Step: ' + currentStep);

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <Profile
          decodedToken={decodedToken}
          fullname={fullname}
          setFullname={setFullname}
          title={title}
          setCurrentStep={setCurrentStep}
        />

      case 2:
        return <ServicePicker
          description={description}
          setDescription={setDescription}
          services={services}
          setCurrentStep={setCurrentStep}
          description_id={description_id}
          setDescriptionID={setDescriptionID}
        />

      case 3:
        return <DatePicker
          location={location}
          startDateTime={startDateTime}
          setStartDateTime={setStartDateTime}
          setEndDateTime={setEndDateTime}
          setCurrentStep={setCurrentStep}
        />
    }
  }

  return (
    <>
      <Header />
      {/* First Step */}
      <br /><br />
      <h1 className="text-center text-2xl"><strong>Schedule a JNCE Medical Clinic Service Right Now</strong></h1>
      <br />
      <form onSubmit={hanleSubmitEvent}>
        <Stepper className="stepper w-1/2" activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
        {
          appointment ? (
            <SuccessModal
              appointment={appointment}
            />
          ) : (
            errorDate ? (
              <ErrorModal
                errorDate={errorDate}
              />

            ) : noDateError ? (
              <NoDateModal
                noDateError={noDateError}
              />
            ) : null
          )
        }
        {showStep(currentStep)}
      </form>
      <Footer />
    </>
  )
}

export default Appointment
