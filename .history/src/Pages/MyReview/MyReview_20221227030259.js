import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReview = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setReviews(data)
        })
        .catch(er => console.error(er))
    },[user?.email])

    const handelDelete = _id =>{
        const proceed = window.confirm('Are you sure, Delete this Review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully')
                    const remaining = reviews.filter(review => review._id !== _id);
                    setOrders(remaining)
                }
            })
        }
    }
    return (
        <div className='mt-12 ml-16 grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
            {
                reviews.map(review => <ReviewCard key={review._id} review={review} handelDelete={handelDelete}></ReviewCard>)
            }
        </div>
    );
};

export default MyReview;