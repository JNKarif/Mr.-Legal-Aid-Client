import React from 'react';

const Subscribe = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className="mask mask-circle" alt='' />
          <div className='w-1/2'>
            <h1 className="text-3xl font-bold">Subscribe for newsletters !</h1>

            <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"></span>
    
  </label>
  <input type="email" placeholder="Type here your email" className="input input-bordered w-full max-w-xs" required />
 
</div>
            <button className="btn btn-outline mt-2">Subscribe</button>
          </div>
        </div>
      </div>
    );
};

export default Subscribe;<h1>this is Subscribe section</h1>