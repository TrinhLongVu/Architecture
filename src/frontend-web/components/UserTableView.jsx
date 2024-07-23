import React from 'react';

import "./UserTableView.css";


export default function UserTableView(props){
    const {data,onDelete, onEdit} = props;

    return(
      <div className='table-container'>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>
                <td className='Button--container'>
                  <button className='Button' onClick={() => onEdit(user)}>Edit</button>
                  <button className='Button' onClick={() => onDelete(user.username)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
    )
}