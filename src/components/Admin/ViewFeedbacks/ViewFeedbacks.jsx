import React, { useEffect } from 'react';

// Components
import Header from '../Header.jsx';

const ViewFeedbacks = () => {

    useEffect(() => {
        localStorage.getItem("adminAuth");
    }, []);

    return (
        <>
            <Header />
            <div>All Feedbacks</div>
        </>
    )
}

export default ViewFeedbacks
