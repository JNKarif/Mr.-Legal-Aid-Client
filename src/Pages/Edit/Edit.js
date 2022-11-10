
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Edit = () => {
    const user = useLoaderData();
    const [edit, setEdit] = useState(user)

    const handleEdit = event => {
        event.preventDefault()
        // console.log(user)
        fetch(`https://assignment-11-server-five-kappa.vercel.app/edit/${user._id}`,{
           method:'PUT',
           headers:{
            'content-type':'application/josn'
           },
           body: JSON.stringify(edit) 
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

    const handleInputChange = event => {
        const form = event.target.name;
        const value = event.target.value;
        const newMessage = { ...edit };
        newMessage[form] = value;
        setEdit(newMessage)
    }

    return (
        <div className='text-center'>

            <p className='text-3xl'>Edit Review of Our {user.serviceName} Service </p>
            <form onSubmit={handleEdit}>
                <input onChange={(handleInputChange)} defaultValue={user.message} name='message' type='text' className="textarea m-20 textarea-accent w-3/5" placeholder="Edit your review here"></input>
                <button type="submit" className='btn btn-outline w-2/5'>Edit</button>
            </form>

        </div>
    );
};

export default Edit;