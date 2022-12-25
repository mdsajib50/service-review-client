import React from 'react';



const ServiceCard = ({service}) => {
    console.log(service)
    const {img, title, description, price} = service
    return (
            
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className='text-left font-semibold'><sp ${price}</p>
        <p className='text-ellipsis'>{`${description.substring(0,99)} ...`}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
    );
}

export default ServiceCard;