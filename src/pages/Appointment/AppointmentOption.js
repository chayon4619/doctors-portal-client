import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body text-center">
                    <h2 className="font-bold text-xl  text-cyan-400">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} available</p>
                    <div className="card-actions justify-center">
                        <label disabled={slots.length === 0} onClick={() => setTreatment(option)} htmlFor="booking-modal" className="btn btn-info  btn-outline">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;