import React, { useState } from 'react';

// axios
import axios from 'axios';
import { createFeedbackURL } from '../api/UserApi.jsx';

import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

import { CallIcon } from '../subComponents/AllSvg.jsx';
import { MailIcon } from '../subComponents/AllSvg.jsx';
import googleMapStyle from '../subComponents/googleMapStyle.jsx';

// Components
import { SuccessModal } from '../subComponents/SuccessModal.jsx';

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 14.578400, lng: 120.983240 }}
      defaultOptions={{ styles: googleMapStyle }}
    >
      < Marker position={{ lat: 14.578400, lng: 120.983240 }} />
    </GoogleMap>

  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Contact = () => {

  /* State Management */
  const [getFeedback, setGetFeedback] = useState('');

  // Add Feedback State
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+63 ');
  const [message, setMessage] = useState('');

  // Status
  const [status, setStatus] = useState('Adding Inquiry');

  // Error Messages
  const [error, setError] = useState([]);
  const [fullnameError, setFullNameError] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [messageError, setMessageError] = useState([]);

  // useEffect(() => {
  //   axios.get(createFeedbackURL)
  //     .then(res => {
  //       console.log(res.data.data)
  //       setGetInquiries(res.data.data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }, []);

  const handleAddFeedback = async (e) => {
    e.preventDefault();
    const addFeedback = createFeedbackURL;

    setStatus('Adding Feedback');
    console.log(status);

    return axios.post(
      addFeedback,
      { fullname: fullname, email: email, phone: phone, message: message }
    )
      .then((res) => {
        setGetFeedback(res.data.message)
      })
      .catch((err) => {
        console.log(error)
        setError(err.response.data.error);
        setFullNameError(err.response.data.error.user.fullname)
        setEmailError(err.response.data.error.user.email)
        setMessageError(err.response.data.error.feedback.message)
      })
  }

  return (
    <div className="contact__container" id="contact">
      <div className="contact__container--section h-auto p-4 flex flex-col items-center justify-center">
        <div className="contact__container--header w-11/12">
          <h2 className="text-5xl text-center font-bold lg:text-5xl md:text-5xl sm:text-4xl custom:text-xl">
            Contact {" "}
            <span className="text-green-800">Details</span>
          </h2>
        </div><br />
        <div className="contact__container--body w-11/12">
          {/* GOOGLE MAP START */}
          <div className="contact__google_map">
            <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_TOKEN}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          {/* GOOGLE MAP END */}
          {/* CONTACT INFORMATION START */}
          <div className="contact__information  bg-slate-300">
            <div className="contact__info--header w-full py-4 px-12">
              <span className="text-3xl">JNCE Medical & Diagnostic Clinic</span>
            </div><br />
            <div className="contact__info--body px-12 flex justify-between sm:justify-center sm:flex-col custom:justify-center custom:flex-col">
              <div className="max-w-sm">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl text-green-800 mb-2">Clinic hours</div>
                  <div className="text-gray-700 text-base">
                    Visitors are limited during COVID-19. Find out
                  </div>
                  <div className="text-gray-700 text-base">
                    more about visitors and visiting hours
                  </div>
                  <div className="text-gray-700 text-base">
                    via inquiring us.
                  </div>
                  <div className="text-gray-700 text-base">
                    &nbsp;
                  </div>
                  <div className="text-gray-700 text-base">
                    &nbsp;
                  </div>
                  <div className="text-gray-700 text-base">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="max-w-sm">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl text-green-800 mb-2">Address</div>
                  <div className="text-gray-700 text-base">
                    G/F CDC Bldg. 1195
                  </div>
                  <div className="text-gray-700 text-base">
                    Ma. Orosa St.
                  </div>
                  <div className="text-gray-700 text-base">
                    Ermita Manila
                  </div>
                  <div className="text-gray-700 text-base">
                    Philippines
                  </div>
                  <div className="text-gray-700 text-base">
                    &nbsp;
                  </div>
                  <div className="text-gray-700 text-base">
                    &nbsp;
                  </div>
                </div>
              </div>
              <div className="max-w-sm">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl text-green-800 mb-2">Contact</div>
                  <div className="text-gray-700 text-base">
                    <span className="font-bold">Tel. no.:</span>
                  </div>
                  <div className="text-gray-700 text-base flex gap-2">
                    <CallIcon className="h-7 w-7" aria-hidden="true" /><span>(02) 8 518-5156 / (02) 8 310-5206</span>
                  </div>
                  <div className="text-gray-700 text-base">
                    <span className="font-bold">Cell. no.:</span>
                  </div>
                  <div className="text-gray-700 text-base flex gap-2">
                    <CallIcon className="h-7 w-7" aria-hidden="true" /><span>(+63)947-584-2888</span>
                  </div>
                  <div className="text-gray-700 text-base">
                    <span className="font-bold">Email:</span>
                  </div>
                  <div className="text-gray-700 text-base flex gap-2">
                    <MailIcon className="h-7 w-7" aria-hidden="true" /><span>jnceclinic@yahoo.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CONTACT INFORMATION END */}
          <br />
          {/* CONTACT INQUIRY FORM START */}
          <div className="contact__form bg-slate-300 border-t-8 border-green-800 py-4 px-12 flex flex-col">
            <span className="text-green-800 text-3xl">Give us your Thoughts</span><br />
            <span className="font-bold">Feedback from this form is not monitored outside of normal business hours. If you have a medical or mental health emergency, please contact us on our hotlines.</span>
            <span>We are unable to provide medical advice or answer individual questions about treatment - these issues should be raised with your doctor.</span>
            <br />
            <form>
              <div className="contact__form--container flex justify-evenly sm:flex-col sm:justify-center custom:flex-col custom:justify-center">
                <div className="w-1/2 px-2 sm:w-full custom:w-full">
                  <div className="text-gray-700 mb-4 w-full">
                    <label className="block mb-1 text-green-600 font-bold" htmlFor="name">Full Name</label>
                    <input value={fullname} onChange={(e) => setFullName(e.target.value)} className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" id="name" placeholder='full name' required />
                    {fullnameError ? (
                      <span>{fullnameError.map((fullnameErr, index) => (
                        <li className="list-none text-red-700 font-semibold my-1" key={index}>
                          <span>{`Fullname ${fullnameErr}`}</span>
                        </li>
                      ))}</span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div className="text-gray-700 mb-4 w-full">
                    <label className="block mb-1 text-green-600 font-bold" htmlFor="email">Your email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="email" id="email" placeholder="valid email" required />
                    {emailError ? (
                      <span>{emailError.map((emailErr, index) => (
                        <li className="list-none text-red-700 font-semibold my-1" key={index}>
                          <span>{`Email ${emailErr}`}</span>
                        </li>
                      ))}</span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div className="text-gray-700 mb-4 w-full">
                    <label className="block mb-1 text-green-600 font-bold" htmlFor="phone">Phone</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="phone" id="phone" placeholder='contact number' required />
                  </div>
                </div>
                <div className="w-1/2 px-2 sm:w-full custom:w-full">
                  <div className="text-gray-700 mb-4 w-full">
                    <label className="block mb-1 text-green-600 font-bold" htmlFor="message">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" className="w-full h-[240px] px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline" placeholder="Leave your concern......" required></textarea>
                    {messageError ? (
                      <span>{messageError.map((messageErr, index) => (
                        <li className="list-none text-red-700 font-semibold my-1" key={index}>
                          <span>{`Message ${messageErr}`}</span>
                        </li>
                      ))}</span>
                    ) : (
                      <span></span>
                    )}
                  </div>
                  <div className="w-full">
                    <button onClick={(e) => handleAddFeedback(e)} type="submit" className="relative w-full sm:w-full custom:w-full inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span className="relative w-full text-center transition-colors duration-200 ease-in-out group-hover:text-white">Submit your Inquiry</span>
                    </button>
                    <br /><br />
                    {getFeedback ? (
                      <SuccessModal
                        getFeedback={getFeedback}
                        setFullName={setFullName}
                        setEmail={setEmail}
                        setPhone={setPhone}
                        setMessage={setMessage}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          {/* CONTACT INQUIRY FORM END */}
        </div >
      </div >
    </div >
  )
}

export default Contact;
