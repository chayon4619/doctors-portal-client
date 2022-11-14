import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('')

    const handelRegister = data => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created successfully!')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(err => {
                        console.error(err);
                    });
            })
            .catch(err => {
                console.error(err)
                setSignUPError(err.message)
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-lg'>
                <h1 className='text-4xl text-center'>Sign up</h1>
                <form onSubmit={handleSubmit(handelRegister)}>
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
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 charrectar or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                            })} type="password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700 mt-2 text-xs'>{errors.password?.message}</p>}
                    </div>
                    <input type="submit" className="btn btn-block mt-6" value="Sign Up" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p className='text-sm text-center mt-2'>Already have an account? <span className='text-cyan-500'><Link to='/login'>Log In</Link></span></p>
                <div className="divider">OR</div>
                <button className="btn btn-outline btn-block">CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Register;