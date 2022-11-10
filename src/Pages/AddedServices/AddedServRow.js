import React from 'react';

const AddedServRow = ({add}) => {
const {serviceName, client, phone, price}=add;
    return (
        <tr>
        <th>{client}</th>
        <td>{phone}</td>
        <td>{serviceName}</td>
        <td>$ {price}</td>
      </tr>
    );
};

export default AddedServRow;