import React, { useState, useEffect } from "react";

// Components
import Header from '../Header.jsx';

const Dashboard = () => {

    useEffect(() => {
        localStorage.getItem("adminAuth");
    }, []);

    return (
        <>
            <Header />
            <div>Admin Dashboard</div>
        </>
    )
}

export default Dashboard
