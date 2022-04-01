import React, { useEffect } from 'react';

import Header from '../Header.jsx';

const ShowFeedback = () => {

    const userData = JSON.parse(localStorage.getItem("userIdentifier"));
    console.log(userData);

    return (
        <>
            <Header />
            <br /><br />

            <div className="show__feedback__container text-center">
                <h1 className="text-center font-semibold text-xl">User Feedback</h1>
                <br /><br />
                <p>Email: </p>
                {userData.attributes.email}
                <br /><br />
                <p>Fullname: </p>
                {userData.attributes.fullname}
                <br /><br />
                <p>Phone: </p>
                {userData.attributes.phone}
                <br /><br />
                <p>Feedback: </p>
                {userData.attributes.feedback[0].message}
                <br /><br />
                <p>Date: </p>
                {userData.attributes.feedback[0].created_at}
            </div>
        </>
    )
}

export default ShowFeedback;
