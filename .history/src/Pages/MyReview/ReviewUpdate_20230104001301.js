import React from 'react';
import { useLoaderData } from 'react-router';

const ReviewUpdate = () => {
    const review = useLoaderData()
    const[review, setReview] = useState()
    const handelUpdate = _id =>{
        fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify()
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(review => review._id !== _id);
                    const approved = reviews.find(review => review._id === _id);
                    const newReviews = [approved,...remaining]
                    setReviews(newReviews)
                }

            })
    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            {/* <figure><img src={img} alt="avatar" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                <div className="text-green-400 text-xl p-4">Service: {service_name}</div>
                </h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    
                    <button onClick ={()=> handelUpdate(_id)} className="btn btn-ghost">Update</button>
                </div>
            </div> */}
        </div>
    );
};

export default ReviewUpdate;