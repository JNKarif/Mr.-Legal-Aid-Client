import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';


const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    useTitle('SignUp')

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
            })
            .catch(err => console.error(err))


    }
    return (
        <div className="hero min-h-screen bg-base-200 p-4 text-center">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <h1 className="text-3xl font-bold">Sign Up</h1>

                            {/* name */}

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" />

                            {/* email */}
                            <label className="label">
                                <span className="label-text" >Email </span>
                            </label>
                            <input type="email" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>

                        {/* password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-outline' name="" value="Sign Up" />


                        </div>
                    </form>

                    {/* toggle */}
                    <p className='py-3'>Already have an account?
                        <Link to='/login' className="label-text-alt text-lg text link link-hover ml-3">Login</Link>  </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;