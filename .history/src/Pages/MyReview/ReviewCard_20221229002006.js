import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({review, handelDelete}) => {
    const {_id, img, message, name, service_name} = review
    
    return (
        {review ?

        <>
        </> 
        : <h1>'No reviews were added'</h1>
        }
    );
};

export default ReviewCard;