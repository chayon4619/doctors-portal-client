import React from 'react';
import bgImg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {


    return (
        <div>
            <div
                style={{
                    background: `url(${bgImg})`,
                    backgroundSize: 'cover'
                }}
                className="hero my-20 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className=" lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className='lg:mr-10'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={data => {
                                if (data) {
                                    setSelectedDate(data)
                                }
                            }}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;