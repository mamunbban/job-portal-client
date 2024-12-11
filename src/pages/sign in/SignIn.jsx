import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginLotty from '../../assets/lottiFiles/login.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const SignIn = () => {
    const {signInUser} = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value

        console.log(email, password);

        signInUser(email,password)
        .then(result =>{
            console.log('SignIn done',result.user);
            
        })
        .catch(error => {
            console.log('ERROR',error);
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center  lg:text-left w-96">
                    <Lottie animationData={loginLotty}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-8 mt-4  text-5xl font-bold">Sign In Now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignIn;