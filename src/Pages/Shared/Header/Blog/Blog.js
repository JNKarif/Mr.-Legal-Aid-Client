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
    <h2 className="card-title">What is JWT and how does it works?</h2>
    <p>JWT stands for JSON Web Token. JWT's main 
      task is to secure data of the user. JWT can be encrypted.
      <br/>
      After successfull login a JWT is initiatated digitally.
      However this JWT can be hold for limited time only.
      At the time of user's need the token is sent using the 
      Bearer. 


    </p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>


{/* 3rd question */}
<div className="card w-96 bg-base-100 shadow-xl image-full mb-4">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">JS vs NodeJs</h2>
    <p>
      JS stands for JavaScript which is high level Scripting Language a 
      vastly updated version of ECMA script. However, NodeJS is runtime environment for JavaScript allowing it run on the 
      server-side. Where as JS used on the client side but NodeJS works mostly to the contrary.
      Frontend is usually made up by us but NodeJS mostly works in the backend.
      Example of JS frameworks RamdaJS, TypesJS. On the other hand Lodash and express are the most 
      famous NodeJS modules.
    </p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>


{/* 4th question */}
<div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">How does NodeJs handles multiple request at the same time?</h2>
    <p>NodeJS runs in event loop  and asynchronous method .So, we have an event queue where the requests are being placed and we have an event loop listening to
       these requests in the event queue. 
       What happens next? NodeJS Web Server maintains a limited
        Thread Pool to provide services to client requests.
         Multiple clients make multiple requests to the 
         NodeJS server. NodeJS receives these requests and places them into the EventQueue .
    </p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Blog;