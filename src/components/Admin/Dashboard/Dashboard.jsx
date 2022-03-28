import React, { useState, useEffect } from "react";
import AdminAuthAPI from "../../../services/AdminAuthAPI";

// Components
import Header from '../Header.jsx';

const Dashboard = () => {

    useEffect(() => {
        localStorage.getItem("adminAuth");
    }, []);

    const handleLogout = () => {
        AdminAuthAPI.logout();
        window.location = "/admin-signin"
    }

    return (
        <>
            <div>Admin Dashboard</div>
            <button onClick={handleLogout}>Log Out</button>
        </>
    )
}

export default Dashboard
