import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const ReviewUpdate = () => {
    const review = useLoaderData()
    const { message} = review
    console.log(message)
    // const[reviews, setReviews] = useState([])
    let newMessage
    const [messages, setMessages] = useState(newMessage)
    
    const handelUpdate = (_id, e) =>{
        e.preventDefault()
        
        fetch(`http://localhost:5000/review-update/${review._id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(messages)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Update Successfully')
            
                // if (data.modifiedCount > 0) {
                //     const remaining = reviews.filter(review => review._id !== _id);
                //     const approved = reviews.find(review => review._id === _id);
                //     const newReviews = [approved,...remaining]
                //     setReviews(data)
                // }

            })
    }
    const handelInputChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
         newMessage = [...message]
        newMessage[field] = value;
        setMessages(newMessage)
    }
    
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