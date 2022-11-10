import React from 'react';

const ReviewsRow = ({review, handleDelete}) => {
   const {serviceName, client, 
    url,message, email, _id, service}=review;




    return (
        <div>
             <tr>
              <th>
                <label>
                 <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={url} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{serviceName}</div>
                    <div className="text-sm opacity-50">10.02.2021</div>
                  </div>
                </div>
              </td>
              <td>
               {client}
                <br/>
                <span className="badge badge-ghost badge-sm">{email}</span>
              </td>
             
              <th>
                <button className="btn btn-ghost btn-xs">{message}</button>
              </th>
            </tr> 
        </div>
    );
};

export default ReviewsRow;