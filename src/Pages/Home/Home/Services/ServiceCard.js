import React from 'react';

const ServiceCard = ({service}) => {

    const {img, price, description, title}=service

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0,100)+'...'}</p>
          <p className='text-white text-2xl'>$ {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline">Details</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;