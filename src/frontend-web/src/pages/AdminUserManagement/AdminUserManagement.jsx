import React from 'react'

import "../../index.css"

import UserTableView from '../../../components/UserTableView';
import PaginationBar from '../../../components/PaginationBar';

function AdminUserManagement() {

  const usersData = [
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@gmail.com', phone: '0123456789', role: 'Player', status: 'Active' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@gmail.com', phone: '0123456789', role: 'Brand', status: 'Banned' },
  ];

  const totalPages = 10;

  const [users, setUsers] = React.useState(usersData);

  function deleteUser(username){
    setUsers((oldUsers) => oldUsers.filter((user) => user.username !== username));
  }

  function editUser(user){
    //do sth
    console.log("Edit user");
  }

  function changePage(number){
    //do sth
    console.log("Page " + number);
  }

  return (
    <div>
      <div style={{height: "50px"}}>
        <button className='Button' >Add new user</button>
      </div>
      <UserTableView data={users} onDelete={deleteUser} onEdit={editUser}/>
      <PaginationBar totalPages={totalPages} onPageChange={changePage}/>
    </div>
  )
}

export default AdminUserManagement