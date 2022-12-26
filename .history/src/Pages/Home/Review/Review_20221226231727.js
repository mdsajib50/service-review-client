import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Review = ({service}) => {
    const {user} = useContext(AuthContext);
    cl
    const [reviews, setReviews] = useState([])
    const {_id}= service;
    console.log(service);
    const handelReview = (e) =>{
        e.preventDefault()
        const form = e.target;
        const message = form.message.value;
        const review ={
            review: _id,
            message
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
            .then(data => setReviews(data))
        },[])
    
    return (
        <div>
            <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
            </div>
        </div>
        <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
        </div>
        {
            reviews.map(review => <div key={review._id} className="chat-bubble">{review.message}</div>)
        }
            <div className="chat-footer opacity-50">
                Delivered
            </div>
        </div>
        <form onSubmit={handelReview}>
        <textarea name='message' className="textarea textarea-accent" placeholder="Write Your Review"></textarea>
        <button className="btn btn-outline btn-success">Submit</button>
        </form>
    </div>
    );
};

export default Review;