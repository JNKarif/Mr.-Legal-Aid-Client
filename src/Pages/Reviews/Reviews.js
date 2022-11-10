import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewsRow from './ReviewsRow';

const Reviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://assignment-11-server-five-kappa.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review')
        if (proceed) {
            fetch(`https://assignment-11-server-five-kappa.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter( rev=>
                            rev._id !== id);
                            setReviews(remaining)
                    }
                  if(reviews.length===0){
                    alert("No review were added")
                  }
                })
        }
    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Service</th>
                        <th>Client</th>
                        <th>Message</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        reviews?.map(review => <ReviewsRow
                            key={review?._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></ReviewsRow>)

                    }



                </tbody>



            </table>
        </div>
    );
};

export default Reviews;