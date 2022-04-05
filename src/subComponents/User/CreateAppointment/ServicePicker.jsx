import React from 'react';

const ServicePicker = (props) => {

    const { description, setDescription, services, setCurrentStep } = props;

    return (
        <div className="text-center mt-8">
            <label htmlFor='services' className='text-xl font-semibold'>Choose your desired Service Type:</label><br />
            <select
                name="services"
                id="services"
                value={description}
                onChange={e => setDescription(e.target.value)}
            >
                <option value="" selected disabled hidden>---</option>
                {services.length ? (
                    services.map((value, index) => (
                        <option id={value.id}>{value.attributes.name}</option>
                    ))
                ) : (
                    <>
                        <td className="text-center font-bold text-lg p-8" colspan="5">No Services Record Found at this Moment <br /> Please try again later.</td>
                    </>
                )}
            </select>
            <br /><br />
            <button onClick={() => setCurrentStep(3)} className="bg-green-700 text-white font-semibold p-4">Confirm Service Type</button>
        </div>
    )
}

export default ServicePicker
