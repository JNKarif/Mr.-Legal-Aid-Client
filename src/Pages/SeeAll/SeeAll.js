import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';

import AllServiceCard from './AllServiceCard/AllServiceCard';

const SeeAll = () => {
    const [services, setServices] = useState([]);
useTitle('Services')
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

                    services.map(service =><AllServiceCard
                        key={service.service_id}
                        service={service}
                    ></AllServiceCard>
                       
                   )

                }

            </div>
           

        </div>
    );
};

export default SeeAll;