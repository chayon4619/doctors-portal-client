import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgImg from '../../../assets/images/bg.png'

const Banner = () => {
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
                    <div className=''>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6 pr-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary border-none bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;