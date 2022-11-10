import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import AddedServRow from './AddedServRow';

const AddedServices = () => {
    const { user } = useContext(AuthContext);
    const [addedservice, setAddedService] = useState([])



    useEffect(() => {
        fetch(`https://assignment-11-server-five-kappa.vercel.app/addedservice?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAddedService(data))
    }, [user?.email])


    return (

        <div className="overflow-x-auto m-20">
            <div>
                <p className='text-3xl text-center mb-4'>
                    Added Services
                </p>
            </div>
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Contact</th>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        addedservice.map(add => <AddedServRow
                            key={add._id}
                            add={add}
                        ></AddedServRow>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default AddedServices;









