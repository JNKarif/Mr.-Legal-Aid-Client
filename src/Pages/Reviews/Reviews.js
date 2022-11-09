import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Reviews = () => {

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})


    useEffect(() => {
        fetch(`https://assignment-11-server-five-kappa.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
<p>your all reviews {reviews.length} </p>
        </div>
    );
};

export default Reviews;