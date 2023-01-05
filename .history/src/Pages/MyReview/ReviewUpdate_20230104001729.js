import React from 'react';
import { useLoaderData } from 'react-router';

const ReviewUpdate = () => {
    const review = useLoaderData()
    const {_id, img, message, name, service_name} = review
    const[reviews, setReviews] = useState([])
    const handelUpdate = _id =>{
        fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify()
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== _id);
                    const approved = reviews.find(review => review._id === _id);
                    const newReviews = [approved,...remaining]
                    setReviews(newReviews)
                }

            })
    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <form onSubmit={handelUpdate} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Update </h1>
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
        </div>
    );
};

export default ReviewUpdate;