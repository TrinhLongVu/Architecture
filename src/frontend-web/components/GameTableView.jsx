import React from 'react';

import "./UserTableView.css";

export default function GameTableView(props){
    const {data,onDelete, onEdit} = props;

    return(
      <div className='table-container'>
        <table className="user-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Exchangable</th>
              <th>Instructions</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((game, index) => (
              <tr key={index}>
                <td>{game.name}</td>
                <td>{game.type}</td>
                <td>{game.exchangable}</td>
                <td>{game.instruction}</td>
                <td className='Button--container'>
                  <button className='Button' onClick={() => onEdit(game.id)}>Edit</button>
                  <button className='Button' onClick={() => onDelete(game.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        
    )
}