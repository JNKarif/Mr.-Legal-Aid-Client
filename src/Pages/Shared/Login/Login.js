import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-base-200 text-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm p-4 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl font-bold">Login</h1>

                           

                            {/* email */}
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control  mt-3">
                            <input  type="submit" className='btn btn-outline ' name="" value="Login" />

                           
                        </div>
                    </form>
                    
                    {/* toggle */}
                    <p className='py-3'>New user?
                        <Link to='/signup' className="label-text-alt text-lg text link link-hover ml-3">Sign Up</Link>  </p>
                </div>
            </div>
        </div>
    );
};

export default Login;