import React from 'react';

const Review = () => {
    return (
        <div>
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
        <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">
                Delivered
            </div>
        </div>
        <form >
        <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>
        </form>
    </div>
    );
};

export default Review;