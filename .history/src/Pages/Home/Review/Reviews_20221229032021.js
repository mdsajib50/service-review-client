import React from 'react';

const Reviews = ({review}) => {
    
    const {img, name, message, review_id} = review
    return (
            {
                review ? <h1>No Review</h1> :
                <>
                </>
            }
                    
          
          
    );
};

export default Reviews;