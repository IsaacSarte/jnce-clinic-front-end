import React from 'react';

const Profile = (props) => {

    const { decodedToken, fullname, setFullname, title, setCurrentStep } = props;

    return (
        <div className="text-center mt-8">
            <h1 className="text-xl font-semibold">Your Profile:</h1>
            <br />

            <label htmlFor='email'>Email:</label><br />
            <p>{decodedToken ? decodedToken.email : ''}</p>
            <br />

            <label htmlFor='fullname'>Fullname:</label><br />
            <input type="text"
                className="bg-slate-200"
                id="fullname"
                value={fullname}
                onChange={e => setFullname(e.target.value)}
            />

            <br /><br />

            <label htmlFor='title'>Title:</label><br />
            <p>{title}</p>
            <br />

            <button onClick={() => setCurrentStep(2)} className="bg-green-700 text-white font-semibold p-4">Confirm Profile</button>
        </div>
    )
}

export default Profile
