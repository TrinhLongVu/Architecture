import React from 'react'
import { useNavigate } from "react-router-dom";

import "../../index.css"

import UserTableView from '../../../components/UserTableView';
import PaginationBar from '../../../components/PaginationBar';

function AdminUserManagement() {
  let navigate = useNavigate();

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
    //Detele on database
  }

  function editUser(username){
    //do sth
    navigate(`/admin/user-management/${username}`);
  }

  function changePage(number){
    //do sth
    console.log("Page " + number);
  }

  return (
    <div>
      <div style={{height: "50px"}}>
        <button className='Button'onClick={() => navigate("/admin/user-management/new")} >Add new user</button>
      </div>
      <UserTableView data={users} onDelete={deleteUser} onEdit={editUser}/>
      <PaginationBar totalPages={totalPages} onPageChange={changePage}/>
    </div>
  )
}

export default AdminUserManagement