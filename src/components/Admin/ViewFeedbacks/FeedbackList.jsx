import React from 'react'

const FeedbackList = ({getFeedbacks = [], filteredList = [], onHandleMessage}) => {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let feedbackDate;
    
  return (
    <>
     <table className="w-full text-left">
                    <thead className="text-lg bg-green-300 rounded text-black font-semibold capitalize">
                        <tr className="text-md whitespace-nowrap">
                            <th scope="col" className="px-6 py-3">
                                Email Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fullname
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.length ? (

                        filteredList.map((value, index) => (
                                <tr key={index} className="bg-white border-b dark:border-gray-700 dark:hover:bg-gray-100">
                                    <td className="px-6 py-4">
                                        <strong>{value.attributes.email}</strong>
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{value.attributes.fullname}</strong>
                                    </td>
                                    <td className="px-6 py-4">
                                        <strong>{value.attributes.phone}</strong>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                            onClick={onHandleMessage}
                                        >
                                            View
                                        </p>
                                    </td>
                                </tr>
                            ))

                        ) : (
                            getFeedbacks.length ? (

                                getFeedbacks.map((value, index) => (
                                        <tr key={index} className="bg-white border-b dark:border-gray-700 dark:hover:bg-gray-100">
                                            <td className="px-6 py-4">
                                                <strong>{value.attributes.email}</strong>
                                            </td>
                                            <td className="px-6 py-4">
                                                <strong>{value.attributes.fullname}</strong>
                                            </td>
                                            <td className="px-6 py-4">
                                                <strong>{value.attributes.phone}</strong>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p id={`${value.id}`} className="cursor-pointer font-bold text-base text-blue-700 hover:text-green-700 transition-all duration-75 ease-in hover:scale-110 capitalize"
                                                    onClick={onHandleMessage}
                                                >
                                                    View
                                                </p>
                                            </td>
                                        </tr>
                                    ))
        
                                ) : (
                                    <>
                                        <td className="text-center font-bold text-lg p-8" colSpan="5">No User Feedback Record Found !</td>
                                    </>
                                )
                        )}
                    </tbody>
                </table>
    
    </>
  )
}

export default FeedbackList
