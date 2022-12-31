import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const Review = ({service}) => {
    const {user} = useContext(AuthContext);
    const {displayName, email, photoURL} = user || {}
    console.log(user)
    const [reviews, setReviews] = useState([])
    const {_id, title}= service;
    console.log(service);
    const handelReview = (e) =>{
        e.preventDefault()
        const form = e.target;
        const message = form.message.value;
        const review ={
            review_id: _id,
            service_name : title,
            message,
            img: photoURL || null,
            email,
            name : displayName || null,

        }

        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                alert('Review Successfully')
                form.reset()
            }
        })
        .catch(err => console.error(err))
        }
        useEffect(()=>{
            fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
               
                      setReviews(data)
                
            })
        },[])
    
    return (
        <div>
        <form onSubmit={handelReview}>
        <textarea name='message' className="textarea textarea-accent h-40 w-1/3" placeholder="Write Your Review"></textarea>
        <button className="btn btn-outline btn-success mb-10 ml-4">Submit</button>
        </form>
            <>
            {
                const reviewId =reviews.map(review => review.review_id)
            reviewId === _id ?

            {
                
                reviews.map(review => <Reviews key={review._id} review={review} service={service}></Reviews>)

            }
            : ''}
            </>
            
    </div>
    );
};

export default Review;