import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

  const { _id,img, price, description, title } = service

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description.slice(0, 100) + '...'}</p>
        <p className='text-white text-2xl'>$ {price}</p>
        <div className="card-actions justify-between">
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          </div>
          <Link to={`/services/${_id}`}> 
          <button className="btn btn-outline">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;