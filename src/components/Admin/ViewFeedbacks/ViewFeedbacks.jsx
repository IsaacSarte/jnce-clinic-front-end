import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { getFeedbackURL } from '../../../api/AdminApi.jsx';

// Components
import Header from '../Header.jsx';
import FeedbackList from './FeedbackList'

const ViewFeedbacks = () => {

    const [getFeedbacks, setGetFeedbacks] = useState([]);
    const [search, setSearchKeyword] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [showFeedbacks, setShowFeedbacks] = useState([]);

    useEffect(() => {
        const Token = localStorage.getItem("adminAuth");
        axios
            .get(getFeedbackURL, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                console.log(res);
                setGetFeedbacks(res.data.data);
            }
            )
            .catch((e) => {
                console.log(e)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleMessage = (e) => {
        const Token = localStorage.getItem("adminAuth");
        console.log(e.target.id)
        const userIdentifier = e.target.id;

        const getUserDataURL = `${getFeedbackURL}/${userIdentifier}`
        axios
            .get(getUserDataURL, {
                headers: {
                    Authorization: Token
                }
            })
            .then((res) => {
                console.log(res.data.data);
                localStorage.setItem("userIdentifier", JSON.stringify(res.data.data));
                window.location = '/show-feedback';
                setShowFeedbacks(res.data.data);
            })
            .catch((e) => {
                console.log(e)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    const handleSearchEmail = (e) => {
        setSearchKeyword(e.target.value)

        const filteredEmail = getFeedbacks.filter((i) => {
            return i.attributes.email.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setFilteredList(filteredEmail)
        console.log(filteredEmail)
    }

    return (
        <>
            <Header />

            <br /><br />

            <div className="user__feedback--title max-w-7xl md:w-[90%]  flex gap-8 md:w-[90%] custom:flex-col gap-1 2xl:gap-8">
                <h1 className="text-left font-bold text-2xl custom:text-lg">JNCE Feedback Lists</h1>
                <input
                    type="search"
                    placeholder='🔍 Search Email Address'
                    value={search}
                    onChange={handleSearchEmail}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 pl-2 p-2 custom:w-full mt-[0.125rem] 2xl:w-1/2 mt-0" />
            </div>

            <br />

            <div className="feedback__table relative max-w-7xl overflow-x-auto shadow-md sm:rounded-lg md:w-[90%]">
               < FeedbackList 
                    getFeedbacks={getFeedbacks}
                    filteredList={filteredList}
                    onHandleMessage={handleMessage}
               />
            </div>

        </>
    )
}

export default ViewFeedbacks
