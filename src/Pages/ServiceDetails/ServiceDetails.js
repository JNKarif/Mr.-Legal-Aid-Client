import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {title}=useLoaderData();

    return (
        <div>
           <p>this is detailed service of {title}</p> 
        </div>
    );
};

export default ServiceDetails;