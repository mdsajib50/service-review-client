import React from 'react';

const ReviewCard = ({review}) => {
    const {_id, img, message, name, service_name} = review
    // const {title}= service
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
                    <button className="btn btn-primary">Update</button>
                    <button onClick ={()=> handelDelete(_id)} className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;