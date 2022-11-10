import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);


    // const {loading } = useContext(AuthContext)
   

    // 

    // if(services.length===0){
    //     loading(true)
    // }

    useEffect(() => {
        fetch('https://assignment-11-server-five-kappa.vercel.app/services3')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err=>console.error(err))
            // if(loading){
            //         return <button className="btn loading">loading</button>
            //     }
    }, [])

    return (
        <div className='mb-12'>
            <h1 className='text-4xl text-center mb-4'>Our Services</h1>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {

                    services.map(ser => <ServiceCard
                        key={ser.service_id}
                        ser={ser}
                    ></ServiceCard>)

                }

            </div>
            <div className='text-center'>
                <Link to='/services'>
                    <button className='btn btn-outline w-2/5'>See All</button>
                </Link>

            </div>

        </div>
    );
};

export default Services;