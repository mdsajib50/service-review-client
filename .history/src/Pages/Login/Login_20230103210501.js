import React,{useContext} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginPic from '../../assets/image/login.png';
import {AuthContext} from '../../context/AuthProvider/AuthProvider';
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Spinner from 'react-bootstrap/Spinner';
import useTitle from '../../hooks/useTitle';
const Login = () => {
    useTitle('login')
    const provider = new GoogleAuthProvider()
    const {auth, login,loading} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Spinner animation="border" />;
    }
    const handelLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
 
        login(email, password)
        .then((result) => {
            const user =result.user
            const currentUser = {
                email: user.email
            }
            //get jwt token
            fetch('http://localhost:5000/jwt',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data =>{
                localStorage.setItem('token',data.token)
                console.log(data)
                navigate(from, { replace: true });
            })
            console.log(user)
        })
        .catch((error) => {
            console.log(error);
        })
     } 

     const handelGoogleLogin =()=>{
         signInWithPopup(auth, provider)
         .then(result =>{
             const user = result.user;
            //  const currentUser = {
            //     email: user.email
            // }
            // //get jwt token
            // fetch('http://localhost:5000/jwt',{
            //     method:'POST',
            //     headers:{
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(currentUser)
            // })
            // .then(res => res.json())
            // .then(data =>{
            //     localStorage.setItem('token',data.token)
            //     console.log(data)
            // })
            console.log(user)
            //     navigate(from, { replace: true });
            })
         .catch((e) => {
             console.error(e)
         })
    }
    return (
        <div className="hero w-full mt-12">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginPic} alt="" srcset=""/>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl py-14">
                    <form onSubmit={handelLogin} className="card-body">
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
                    <p className='text-center'>Log in with Google</p>
                    <button onClick={handelGoogleLogin} className='btn font-bold text-green-400'>Google</button>
                    <p className='text-center'>Create A New Account<Link className='font-bold text-orange-600' to='/signup'>Sign up</Link></p>
                    
                </div>
            </div>

        </div>
    );
};

export default Login;