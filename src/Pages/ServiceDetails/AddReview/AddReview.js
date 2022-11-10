import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddReview = () => {
    const { _id, title } = useLoaderData();
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistered';
        const url = form.url.value;
        const message = form.message.value

        const review = {
            service: _id,
            serviceName: title,
            client: name,
            email,
            url,
            message
        }

        if (!user?.email) {

            alert('Please login to add a review')
        }
        else {

        }





        fetch('https://assignment-11-server-five-kappa.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err));

    }

    return (
        <div className='mb-20 mt-20'>
            <p className='text-4xl text-center my-12'>Please Add Your Review of Our {title} Service</p>

            <form onSubmit={handleReview}>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                    <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full" />
                    <input type="url" name='url' placeholder="Your photo URL" className="input input-bordered w-full" />
                    <input type="email" name='email' placeholder="Your email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                </div>
                <textarea name='message' className="textarea textarea-accent w-full" placeholder="Your review"></textarea>

{
user?.email ?
<>
<input type="submit" className='btn btn-outline' name="" value="Add Review"/>
</>

:

<>
<input type="submit" className='btn btn-outline' name="" value="Add Review" disabled />
</>
    
}

                
            </form>
        </div>
    );
};

export default AddReview;