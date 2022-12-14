import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-three.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handelAddDoctor = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }

                    fetch('https://doctors-portal-server-three.vercel.app/doctors', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/managedoctors')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='w-96 p-7 shadow-xl rounded-lg'>
                <h2 className='text-4xl text-center'>Add a Doctor</h2>
                <form onSubmit={handleSubmit(handelAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: "Name is required"
                            })} type="text"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    {errors.name && <p className='text-red-700 mt-2 text-xs'>{errors.name?.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: "Email Address is required"
                            })} type="email"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    {errors.email && <p className='text-red-700 mt-2 text-xs'>{errors.email?.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                            {...register('specialty')}
                            className="select select-bordered w-full max-w-xs">
                            {
                                specialties.map(specialty => <option
                                    key={specialty._id}
                                    value={specialty.name}
                                >{specialty.name}</option>)
                            }
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            {...register("img", {
                                required: "Photo is required"
                            })} type="file"
                            className=" w-full max-w-xs" />
                    </div>
                    {errors.img && <p className='text-red-700 mt-2 text-xs'>{errors.img?.message}</p>}
                    <input type="submit" className="btn btn-block mt-6" value="Add Doctor" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctors;