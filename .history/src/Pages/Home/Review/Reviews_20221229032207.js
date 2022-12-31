import React from 'react';

const Reviews = ({review}) => {
    
    const {img, name, message, review_id} = review
    return (
            {
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Document</title>
                </head>
                <body>
                    
                </body>
                </html>review ?  :
                <>
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
                     </>
                     
            }
                    
          
          
    );
};

export default Reviews;