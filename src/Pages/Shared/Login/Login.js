import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const Login = () => {

    const { login, providerLogin } = useContext(AuthContext)
    useTitle('Login')

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user.email);
                // form.reset();

                const currentUser = {
                    email: user.email
                }
                console.log(currentUser)
                // JWT Token
                fetch('https://assignment-11-server-five-kappa.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    localStorage.setItem('legalAidToken',data.token)
                    navigate(from,{replace:true})
                })

            })
            .catch(error => console.error(error))
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))
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
                        <div className="form-control  mt-3">
                            <input type="submit" className='btn btn-outline ' name="" value="Login" />


                        </div>
                    </form>
                    <div>
                        <button className='btn btn-outline' type="" onClick={handleGoogleSignIn}>Sign With Google</button>
                    </div>

                    {/* toggle */}
                    <p className='py-3'>New user?
                        <Link to='/signup' className="label-text-alt text-lg text link link-hover ml-3">Sign Up</Link>  </p>
                </div>
            </div>
        </div>
    );
};

export default Login;