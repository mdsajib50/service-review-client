import React from 'react';

const ReviewCard = ({review, service}) => {
    const {img, message, name} = review
    const {title}= service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="badge badge-secondary">{title}</div>
                </h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;