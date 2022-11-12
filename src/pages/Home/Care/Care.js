import React from 'react';
import care from '../../../assets/images/treatment.png'

const Care = () => {
    return (
        <div>
            <div className="hero bg-base-100">
                <div className="hero-content lg:w-4/5 mx-auto my-16 flex-col lg:flex-row">
                    <img src={care} alt='' className="w-full lg:mr-12 lg:max-w-sm  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary border-none bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;