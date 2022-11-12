import React from 'react';
import bgImg from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div>
            <section
                style={{
                    background: `url(${bgImg})`,
                    backgroundSize: 'cover'
                }}
                className="p-6 rounded-lg text-gray-100">
                <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow = ng-untouched ng-pristine ng-valid">
                    <h2 className="w-full text-center text-cyan-400 text-xl font-bold leading-tight">Contact us</h2>
                    <h2 className='text-center text-white text-3xl'>Stay connected with us</h2>
                    <div>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
                    </div>
                    <div>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-4 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-cyan-400 focus:ring-violet-400 hover:ring-indigo-400 text-gray-100">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Contact;