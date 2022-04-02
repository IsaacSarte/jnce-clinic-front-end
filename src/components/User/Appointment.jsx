import React, { useState } from 'react'
import axios from 'axios'

const Appointment = () => {

  const hanleSubmitEvent = (e) => {
    e.preventDefault()
    const token_res = JSON.parse(localStorage.getItem('calendarOAuth'))
    const access_token = `${token_res.data.access_token}`

    axios.post('api/create-event', {
      title,
      description,
      location,
      startDateTime,
      endDateTime,
      access_token
    })
    .then(res => {
      console.log(res.data)
      alert('You are successfully scheduled!')
      window.open("https://calendar.google.com/calendar");
      window.location = '/'
    })
    .catch(err => console.log(err))

  }

  const [fullname, setFullname] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')

  return (
    <div>
      <form onSubmit={hanleSubmitEvent}>

          <label htmlFor='fullname'>Fullname:</label><br />
          <input type="text" 
            id="fullname" 
            value={fullname}
            onChange={e => setFullname(e.target.value)}
          /> <br />

          <label htmlFor='title'>Title:</label><br />
          <input type="text" 
            id="title" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          /> <br />

          <label htmlFor='description'>Description:</label><br />
          <input type="text" 
            id="description" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          /> <br />

        <label htmlFor='location'>Location:</label><br />
          <input type="text" 
            id="location" 
            value={location}
            onChange={e => setLocation(e.target.value)}
          /><br />

          <label htmlFor='startDateTime'>Start Date:</label><br />
          <input type="datetime-local" 
            id="startDateTime" 
            value={startDateTime}
            onChange={e => setStartDateTime(e.target.value)}
          /><br /><br />

          
          <label htmlFor='endDateTime'>End Date:</label><br />
          <input type="datetime-local" 
            id="endDateTime" 
            value={endDateTime}
            onChange={e => setEndDateTime(e.target.value)}
          /><br /><br />

          <button type="submit">Book now!</button>
      </form>
    </div>
  )
}

export default Appointment
