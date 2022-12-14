import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext)

    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
            price
        }

        fetch('https://doctors-portal-server-three.vercel.app/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Confirmed');
                    setTreatment(null);
                    refetch();
                }
                else {
                    toast.error(data.message);
                    setTreatment(null);
                }

            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelSubmit} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text" value={date} disabled className="input bg-gray-200  w-full " />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full " />
                        <input type="tel" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full " />
                        <input className='btn btn-dark' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;