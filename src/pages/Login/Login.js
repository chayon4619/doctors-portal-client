import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login, handelGoogleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handelLogin = data => {
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginError('');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err.message);
                setLoginError(err.message)
            })
    }

    const googleLogin = () => {
        handelGoogleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-lg'>
                <h1 className='text-4xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handelLogin)}>
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
                                minLength: { value: 6, message: 'Password must be 6 charrectar or longer' }
                            })} type="password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700 mt-2 text-xs'>{errors.password?.message}</p>}
                        <label className="label">
                            <Link><span className="label-text">Forgot Password ?</span></Link>
                        </label>
                    </div>
                    <div>
                        {loginError && <p className='text-red-600 '>{loginError}</p>}
                    </div>
                    <input type="submit" className="btn btn-block mt-6" value="Login" />
                </form>
                <p className='text-sm text-center mt-2'>New to Doctors Portal? <span className='text-cyan-500'><Link to='/register'>Create new account</Link></span></p>
                <div className="divider">OR</div>
                <button onClick={googleLogin} className="btn btn-outline btn-block">CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;