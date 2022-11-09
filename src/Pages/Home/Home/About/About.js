import React from 'react';

const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl  mb-12">
        <figure><img className='mask mask-triangle-4' src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
        <div className="card-body">
          <h2 className="text-4xl">About Us</h2>
          <p className=' text-white'>We are an international law practitioner based in Bangladesh. 
         <br/> We have been growing at breakneck speed in recent years.
          <br/> In the past two years or so it has established several dozens of 
<br/> offices within and outside Bangladesh, covering such places as Dhaka and Chittagong in Bangladesh,
    <br/>       and in countries including India, Iran, the Philippines and Singapore.</p>

          <div className="">

<p className='text-2xl mt-3  text-white'>Professional</p> 
          <p className='mt-1  text-white'>We advocate professionalism and uphold the rule of law.
          <br/> We persist in refining our legal skills to order to provide better services to our clients.</p> 

          <p className='text-2xl mt-3 text-white'>Innovation</p> 
          <p className='mt-1  text-white'>By standing on a wider, more reasonable and more scientific perspective,
           <br/> we constantly seek for new technologies and methodologies to polish
           <br/> our work process and to ultimately create better solutions of each issue.</p>
          </div>
        </div>
      </div>
    );
};

export default About;