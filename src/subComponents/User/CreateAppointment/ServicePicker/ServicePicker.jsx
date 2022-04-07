import React, { useState } from 'react';

/* Components */
import { ErrorFnModal } from './ErrorFnModal';

const ServicePicker = (props) => {

    const { description, description_id, setDescriptionID, setDescription, services, setCurrentStep } = props;

    const [serviceError, setServiceError] = useState('');

    const handleService = () => {
        description ? setCurrentStep(3) : setServiceError("Service Type can't be blank!");
    }

    return (
        <>
            <div className="profile__form max-w-3xl p-16 mt-16 shadow-lg rounded-md relative">
                <h1 className="text-2xl text-left font-bold custom:text-xl">Choose your desired Service Type: </h1>
                <br />

                <select
                    name="services"
                    id={description_id}
                    className="select-input border border-gray-300 text-gray-900 text-sm rounded-lg block pl-10 p-2.5 custom:w-full"
                    value={description}
                    onChange={e => (setDescription(e.target.value), setDescriptionID(e.target.selectedIndex))}
                >
                    <option value="" selected disabled hidden>--Service Type--</option>
                    {services.length ? (
                        services.map((value, index) => (
                            <option
                                id={value.id}
                                className="custom:w-full"
                            >
                                {value.attributes.name}
                            </option>
                        ))
                    ) : (
                        <>
                            <td className="text-center font-bold text-lg p-8" colspan="5">No Services Record Found at this Moment <br /> Please try again later.</td>
                        </>
                    )}
                </select>
                <br /><br />

                <div className="flex justify-end gap-4 mt-4 custom:flex-col-reverse">
                    <button
                        onClick={() => setCurrentStep(1)}
                        className=" text-black font-bold text-lg p-4 duration-75 hover:text-gray-900 custom:p-0 text-md whitespace-nowrap"
                    >
                        Go Back
                    </button>
                    <button
                        onClick={handleService}
                        className="bg-green-700 text-white font-semibold p-4 duration-75 hover:bg-green-800 rounded-md custom: text-md whitespace-nowrap"
                    >
                        Confirm Service Type
                    </button>
                    {serviceError ? (
                        <ErrorFnModal
                            serviceError={serviceError}
                        />
                    ) : (
                        null
                    )}
                </div>

            </div>
            <br /><br />
        </>

    )
}

export default ServicePicker
