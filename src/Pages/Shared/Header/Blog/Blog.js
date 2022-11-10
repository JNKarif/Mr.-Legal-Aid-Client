import React from 'react';
import useTitle from '../../../../Hooks/useTitle';

const Blog = () => {
  useTitle('Blog')
    return (
        <div className='mb-12'>
           <p className='text-4xl mb-6'>Blog</p>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-16 justify-center'>
            {/* 1st question */}
            <div className="card w-96 bg-base-100 shadow-xl image-full mb-4">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">SQL Vs NoSQL</h2>
    <p>
      SQL means Structured Query Language which is an old method whereas NoSQL
       is some kind of modern concept for database technology. SQL is rational but NoSQL is non-rational.
       NoSQL can be asserted as "not only SQL". Examples for SQl are Db2, MySQL, PostgreSQL, Oracle Database and Microsoft SQL Server etc. Examples for NoSQL are  Redis, MongoDB, FaunaDB, Cassandra and BigTable etc.

    </p>
   
  </div>
</div>


{/* 2nd question */}
<div className="card w-96 bg-base-100 shadow-xl image-full mb-4">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>


{/* 3rd question */}
<div className="card w-96 bg-base-100 shadow-xl image-full mb-4">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>


{/* 4th question */}
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Blog;