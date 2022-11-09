import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-five-kappa.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-12'>
            <h1 className='text-4xl text-center mb-4'>Our Services</h1>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {

                    services.map(service => <ServiceCard
                        key={service.service_id}
                        service={service}
                    ></ServiceCard>)

                }

            </div>
            <div className='text-center'>
                <Link to='/services/seeall'>
                    <button className='btn btn-outline w-2/5'>See All</button>
                </Link>

            </div>

        </div>
    );
};

export default Services;