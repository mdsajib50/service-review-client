import React from 'react';

const Review = ({service}) => {
    const {_id}= service;
    console.log(service);
    const handelReview = (e) =>{
        e.preventDefault()
        const form = e.target;
        const review = form.review.value;
        const review ={
            
        }

    }
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
        <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">
                Delivered
            </div>
        </div>
        <form onSubmit={handelReview}>
        <textarea name='review' className="textarea textarea-accent" placeholder="Write Your Review"></textarea>
        <button className="btn btn-outline btn-success">Submit</button>
        </form>
    </div>
    );
};

export default Review;