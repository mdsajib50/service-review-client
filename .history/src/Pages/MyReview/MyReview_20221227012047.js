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
        <div>
            {
                reviews.map(review )
            }
        </div>
    );
};

export default MyReview;