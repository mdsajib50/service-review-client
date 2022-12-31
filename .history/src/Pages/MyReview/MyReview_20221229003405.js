import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';
import ReviewUpdate from './ReviewUpdate';


const MyReview = () => {
    const {user, logOut} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                logOut()
            }
            res.json()})
        .then(data =>{
            console.log(data)
            setReviews(data)
        })
        .catch(er => console.error(er))
    },[user?.email])

    const handelDelete = _id =>{
        const proceed = window.confirm('Are you sure, Delete this Review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted Successfully')
                    const remaining = reviews.filter(review => review._id !== _id);
                    setReviews(remaining)
                }
            })
            .catch(err => console.error(err))
        }
    }
    return (
        <div className='mt-12 ml-16 grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
            { 
                reviews ?
                reviews.map(review => <ReviewCard key={review._id} review={review} handelDelete={handelDelete}></ReviewCard>) :<><h1 style={{textAlign:"center"}}>No reviews were added</h1></>
            }
           
        </div>
    );
};

export default MyReview;