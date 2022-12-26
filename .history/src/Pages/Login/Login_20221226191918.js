import React from 'react';
const Login = () => {
    
    return (
        <div className="hero w-full mt-12">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
        
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl py-14">
                    <form className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
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
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='text-center'> New to Genius Car <Link className='font-bold text-orange-600' to='/signup'>Sign up</Link></p>
                    <Link>
                </div>
            </div>

        </div>
    );
};

export default Login;