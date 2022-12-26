import React from 'react';

const ReviewCard = ({review}) => {
    const {} = 
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-ghost">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;