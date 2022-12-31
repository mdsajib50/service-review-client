import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({review, handelDelete}) => {
    const {_id, img, message, name, service_name} = review
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="avatar" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="text-green-400 text-xl p-4">Service: {service_name}</div>
                </h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <Link to={`/review-update/${_id}`><button className="btn btn-primary">Edit Review</button></Link>
                    
                    <button onClick ={()=> handelDelete(_id)} className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;