import React from 'react';

const Reviews = ({review, service}) => {
    const {img, name, message} = review
    return (
        <div className="chat chat-start mb-4">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                    <img src={img} />
                    </div>
                </div>
                <div className="chat-header">
                    {name}
                    <time className="text-xs opacity-50"></time>
                </div>
                    <div className="chat-bubble">{message}</div>
                
                    <div className="chat-footer opacity-50">
                
                    </div>
                </div>
    );
};

export default Reviews;