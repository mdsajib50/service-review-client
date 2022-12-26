import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const ServiceDetails = () => {
    const {_id, title, img, description,price}= useLoaderData()
    return (
        <>
            <div className="card card-compact w-1/2 mx-auto mt-4 mb-10 bg-base-100 shadow-xl">
      <figure>
      <PhotoProvider>
      <div className="foo">
        
          <PhotoView key={_id} src={img}>
            <img src={img} alt="" />
          </PhotoView>
        
      </div>
    </PhotoProvider>
        </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl">{title}</h2>
        <p className='text-left font-semibold text-xl'><span className='text-orange-400 font-bold'>Price:</span> ${price}</p>
        <p className='text-xl'>{description}</p>
        <div className="card-actions justify-end mb-10">
          <Link to='/service'><button className="btn btn-primary">Back</button></Link>
        </div>
      </div>
    </div>
    <h1 className='text-4xl font-bold mx-auto mb-10'>Reviews</h1>
    <Review seervice></Review>
    </>
        
    );
};

export default ServiceDetails;