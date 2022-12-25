import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';



const ServiceCard = ({service}) => {
    console.log(service)
    const {_id, img, title, description, price} = service
    return (
            
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
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
        <h2 className="card-title">{title}</h2>
        <p className='text-left font-semibold'><span className='text-orange-400 font-bold'>Price:</span> ${price}</p>
        <p className='text-ellipsis'>{`${description.substring(0,99)} ...`}</p>
        <div className="card-actions justify-end">
          <Link to={`/`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
    );
}

export default ServiceCard;