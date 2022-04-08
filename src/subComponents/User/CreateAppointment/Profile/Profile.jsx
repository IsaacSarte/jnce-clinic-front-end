import React, { useState } from 'react';
import { ErrorFnModal } from './ErrorFnModal';

const Profile = (props) => {

    const { decodedToken, fullname, setFullname, title, setCurrentStep } = props;

    const [profileError, setProfileError] = useState('');

    const handleProfile = () => {
        fullname ? setCurrentStep(2) : setProfileError("Fullname can't be blank!");
    }

    return (
        <>
            <div className="profile__form max-w-3xl shadow-lg p-16 mt-16 rounded-md relative md:w-[90%] lg:w-full">

                <p className="font-semibold text-xl">{title}</p>
                <br />

                <h1 className="text-2xl text-left font-bold">Your Profile:</h1>
                <br />

                <label htmlFor="email-adress-icon" className="block mb-2 text-md font-medium text-black">Email address</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <p id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5">{decodedToken ? decodedToken.email : ''}</p>
                </div>

                <br />

                <label htmlFor="email-adress-icon" className="block mb-2 text-md font-medium text-black">Fullname</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path></svg>
                    </div>
                    <input id="fullname-icon"
                        placeholder="Type your fullname here"
                        className="fullname-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                        value={fullname}
                        onChange={e => setFullname(e.target.value)}
                    />
                </div>

                <br />

                <div className="flex justify-end">
                    <button
                        onClick={handleProfile}
                        className="bg-green-700 text-white font-semibold p-4 duration-75 hover:bg-green-800 rounded-md"
                    >
                        Confirm Profile
                    </button>
                    {profileError ? (
                        <ErrorFnModal
                            profileError={profileError}
                        />
                    ) : (
                        null
                    )}
                </div>
            </div>
            <br /><br />
        </>
    )
}

export default Profile
