import React, { useState, useEffect } from "react";
import axios from "axios";

import { LazyLoadImage } from 'react-lazy-load-image-component';

// Images
import admin from '../../../assets/svg/admin.svg';

// Icons
import { AdminAvatar } from "../../../subComponents/AllSvg";

// Components
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';


const Dashboard = () => {

    const baseURL = process.env.REACT_APP_JNCE_BASE_URL;
    const Token = localStorage.getItem("adminAuth");
    const Identifier = localStorage.getItem("adminIdentifier");
    const [username, setUsername] = useState('');

    useEffect(() => {
        const url = `${baseURL}/api/v1/admin/${Identifier}`;
        axios
            .get(url, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => (setUsername(res.data.name)))
            .catch((e) => {
                console.log(e)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header />

            <br /><br />

            <div className="admin__email max-w-7xl text-right lg:w-[90%] xl:w-[90%] 2xl:w-full">
                <p className="font-semibold text-xl flex gap-4 justify-end custom:text-lg">
                    Admin:
                    <p className="flex">
                        <AdminAvatar className="mt-[0.15rem]" /><span className="capitalize">{username}</span>
                    </p>
                </p>
            </div>

            <br /><br />

            <div className="admin__dashboard__container min-h-full max-w-7xl flex justify-center items-center text-left gap-60 custom:flex-col gap-0 md:gap-2 xl:gap-40 2xl:gap-60">
                <div className="admin__dashboard--left">
                    <h1 className="text-5xl tracking-wider custom:text-3xl tracking-normal text-center md:text-left text-3xl xl:text-5xl 2xl:text-5xl">
                        <strong>Welcome JNCE Admin!</strong>
                    </h1>
                    <p className="text-3xl font-semibold mt-3 custom:text-2xl text-center md:text-left text-xl xl:text-3xl 2xl:text-3xl">See what is going around the <br /> JNCE Medical Clinic</p>
                    <br />
                </div>
                <div className="admin__dashboard--right">
                    <LazyLoadImage
                        className="admin__svg"
                        alt="admin svg"
                        src={admin}
                    />
                </div>
            </div>

            <br /><br />

            <div className="admin__footer fixed bottom-0 w-full custom:relative">
                <Footer />
            </div>
        </>
    )
}

export default Dashboard
