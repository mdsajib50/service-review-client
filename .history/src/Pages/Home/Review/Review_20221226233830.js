import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Review = ({service}) => {
    const {user} = useContext(AuthContext);
    console.log(user)
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
            <>
            {
            reviews.map(review => {
              
            })
        }
            </>
            
        <form onSubmit={handelReview}>
        <textarea name='message' className="textarea textarea-accent" placeholder="Write Your Review"></textarea>
        <button className="btn btn-outline btn-success">Submit</button>
        </form>
    </div>
    );
};

export default Review;