import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewCard from './ReviewCard';
import ReviewUpdate from './ReviewUpdate';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
    const {user, logOut} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const notify = () => toast("Deleted Successfully!");
    console.log(user.email)
    console.log(reviews)
    useTitle('my-review')
    useEffect(()=>{
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
               return logOut()
            }
            return res.json()
        })
        .then(data =>{
            console.log(data)
            setReviews(data)
        })
        .catch(er => console.error(er))
    },[user?.email, logOut])

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
                   notify()
                    const remaining = reviews.filter(review => review._id !== _id);
                    setReviews(remaining)
                }
            })
            .catch(err => console.error(err))
        }
    }
    return (
        <div className={'mt-12 ml-16 grid gap-6 grid-cols-1 md:grid-cols-2'  +(reviews ? ' lg:grid-cols-3' : 'lg:grid-cols-1')}>
         
            { 
                reviews.l ?
                reviews.map(review => <ReviewCard key={review._id} review={review} handelDelete={handelDelete}></ReviewCard>) : <><h1 className='text-center'>No reviews were added</h1></>
            }
            <>
            <ToastContainer />
            </>
        </div>
    );
};

export default MyReview;