import React from 'react';

const Reviews = ({review, service}) => {
    console.log(service)
    const{_id} = service
    const {img, name, message, review_id} = review
    return (
            {
                review_id !== _id ?
                 
                
            }
          
    );
};

export default Reviews;