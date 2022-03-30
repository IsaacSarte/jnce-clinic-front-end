import React, { useEffect } from 'react';

// Components
import Header from '../Header.jsx';

const ViewPatients = () => {

    useEffect(() => {
        localStorage.getItem("adminAuth");
    }, []);

    return (
        <>
            <Header />
            <div>All Patients</div>
        </>
    )
}

export default ViewPatients
