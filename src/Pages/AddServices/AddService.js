import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddService = () => {

    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value

        const service = {
            service: _id,
            serviceName: title,
            client: name,
            email,
           phone,
            message,
            price
        }


        fetch('https://assignment-11-server-five-kappa.vercel.app/addedservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service added successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err));



    }

    return (
        <div className='mb-20 mt-20'>
        <p className='text-4xl text-center my-12'>Add {title} Service</p>
        <p className='text-4xl text-center my-12'>Price: $ {price} </p>

        <form onSubmit={handleAddService}>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full" />
                <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered w-full" />
                <input type="email" name='email' placeholder="Your email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
            </div>
            <textarea name='message' className="textarea textarea-accent w-full" placeholder="Notes"></textarea>

{
user?.email ?
<>
<input type="submit" className='btn btn-outline' name="" value="Add Service"/>
</>

:

<>
<input type="submit" className='btn btn-outline' name="" value="Add Service" disabled />
</>

}

            
        </form>
    </div>
    );
};

export default AddService;