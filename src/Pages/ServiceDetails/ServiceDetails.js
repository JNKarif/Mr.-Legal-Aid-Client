import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import AddService from '../AddServices/AddService';

import AddReview from './AddReview/AddReview';


const ServiceDetails = () => {
    const { img, price, description, title } = useLoaderData();

    const { loading } = useContext(AuthContext)
   

    if(loading){
        return <button className="btn loading">loading</button>
    }

    return (
        <div>
            {/* details section */}
           
            <div className="card card-side grid grid-cols-1 md:grid-cols-2 bg-base-100 shadow-xl">
                <div className='w-full bg-black-600'>

                    <figure><img src={img} alt="Movie" /></figure>
                </div>
                <div className="card-body bg-black w-full">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline w-2/5">$ {price}</button>
                    </div>
                </div>
            </div>


<div>

    <AddService></AddService>
</div>


            {/* review section */}
            <div>

                <AddReview></AddReview>

            </div>

        </div>

    );
};

export default ServiceDetails;