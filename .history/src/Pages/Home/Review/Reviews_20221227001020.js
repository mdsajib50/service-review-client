import React from 'react';

const Reviews = ({review}) => {
    const {img} = review
    return (
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
                    <div className="chat-bubble"></div>
                
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
    );
};

export default Reviews;