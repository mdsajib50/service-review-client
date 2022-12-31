import React from 'react';

const ReviewUpdate = () => {
    
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
                    
                    <button onClick ={()=> handelUpdate(_id)} className="btn btn-ghost">Update</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewUpdate;