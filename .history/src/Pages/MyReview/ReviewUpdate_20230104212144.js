import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const ReviewUpdate = () => {
    const review = useLoaderData()
    const {_id, message} = review
    
    const[reviews, setReviews] = useState(review)
    console.log(review)
    
    const handelUpdate = (e) =>{
        e.preventDefault();
        
        fetch(`http://localhost:5000/review-update/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(reviews)
            })
            .then(res =>res.json())
            .then(data => {
                // if (data.modifiedCount > 0) {
                //     alert('Update Successfully')
                //     //    form.reset()
                // }
                console.log(data)
            })
        }
        const handelInputChange = e =>{
            const field = e.target.name;
            const value = e.target.value;
            const newReview = {...reviews}
             newReview[field] = value;
            setReviews(newReview)
        }
    console.log(reviews)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <form onSubmit={handelUpdate} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Update Review</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea onChange={handelInputChange} name='message' className="textarea textarea-bordered h-24" defaultValue={message}></textarea>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
        </div>
    );
};

export default ReviewUpdate;