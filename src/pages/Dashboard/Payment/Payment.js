import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const data = useLoaderData();

    const { price, slot, treatment, appointmentDate } = data;



    return (
        <div>
            <h1 className='text-3xl'> Payment for <span className='text-4xl font-semibold text-orange-700'>{treatment}</span></h1>
            <p className='text-lg'>Please Pay <span className=' font-semibold text-xl'>${price}</span> for your appointment on <span className='font-semibold'>{appointmentDate}</span> at <span className='font-semibold'>{slot}</span></p>
            <div className='w-96 my-12 rounded-lg shadow-lg p-6'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;