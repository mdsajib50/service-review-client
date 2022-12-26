import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data =setReviews(data))
        .catch(er => console.error(er))
    },[user?.email])
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
                <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
                </div>
            </div>
        </div>
    );
};

export default MyReview;