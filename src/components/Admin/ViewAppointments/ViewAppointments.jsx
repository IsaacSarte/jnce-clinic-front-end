import React, { useEffect } from 'react';

// Components
import Header from '../Header.jsx';

const ViewAppointments = () => {

    useEffect(() => {
        localStorage.getItem("adminAuth");
    }, []);

    return (
        <>
            <Header />
            <div>All Appointments</div>
        </>
    )
}

export default ViewAppointments;
