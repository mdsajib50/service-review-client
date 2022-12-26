import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/images/login/login.svg';


const SignUp = () => {
   
    return (
        <div className="hero w-full mt-12">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl py-14">
                    <form className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'> Already have an account? <Link className='font-bold text-orange-600' to='/login'>Login</Link></p>

                </div>
            </div>

        </div>
    );
};

export default SignUp;