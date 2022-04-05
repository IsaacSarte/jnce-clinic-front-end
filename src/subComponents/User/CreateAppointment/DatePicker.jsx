import React from 'react';

const DatePicker = (props) => {

    const { location, startDateTime, setStartDateTime, setEndDateTime } = props;

    return (
        <div className="text-center mt-8">
            <h1 className="text-xl font-semibold">Choose your desired Date of Appointment:</h1>
            <br />
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
                className="cursor-pointer bg-green-700 text-white font-semibold p-4"
                type="submit"
                value="Schedule Appointment"
            />
        </div>
    )
}

export default DatePicker
