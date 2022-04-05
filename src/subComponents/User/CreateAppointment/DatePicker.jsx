import React from 'react';

const DatePicker = (props) => {

    const { location, startDateTime, setStartDateTime, setEndDateTime, setCurrentStep } = props;

    return (
        <>
            <div className="profile__form max-w-3xl p-16 mt-16 rounded-md relative">
                <p className="font-semibold text-xl custom:text-md">JNCE Address: {location}</p>
                <br />

                <h1 className="text-xl font-semibold">Choose your desired Date of Appointment:</h1>
                <br />

                <input type="datetime-local"
                    id="startDateTime"
                    value={startDateTime}
                    onChange={e => (setStartDateTime(e.target.value), setEndDateTime(e.target.value))}
                /><br /><br />

                <div className="flex justify-end gap-4 mt-4 custom:flex-col-reverse">
                    <button
                        onClick={() => setCurrentStep(2)}
                        className=" text-black font-bold text-lg p-4 duration-75 hover:text-gray-900 custom:p-0 text-md whitespace-nowrap"
                    >
                        Go Back
                    </button>
                    <input
                        className="cursor-pointer bg-green-700 text-white font-semibold p-4 duration-75 hover:bg-green-800 rounded-md custom: text-md whitespace-nowrap"
                        type="submit"
                        value="Schedule Appointment"
                    />
                </div>
            </div>
            <br /><br />
        </>
    )
}

export default DatePicker
