import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useParams, useNavigate} from "react-router-dom";

import "./style.css";
import GameTableView from '../../../components/GameTableView';
import PaginationBar from '../../../components/PaginationBar';

function AdminGameManagement() {

  const totalPages = 10;

  const data = [
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 1, name: "Trivia Blast", type: "Trivia Quiz", exchangable: "No", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
    {id: 2, name: "Lắc Xì", type: "Shake Phone", exchangable: "Yes", instruction: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", imageFile: ""},
  ];

  const [games,setGames] = useState(data);
  
  let navigate = useNavigate();

  function editGame(id){
    navigate(`/admin/game-management/${id}`);
  }

  function newGame(){
    navigate(`/admin/game-management/new`);
  }

  function deleteGame(id){
    //make API call
  }

  function changePage(number){
    //do sth
    console.log("Page " + number);
  }

  return (
    <div className="GameManagement">
      <div style={{height: "50px"}}>
        <button className='Button'onClick={newGame} >Add new game</button>
      </div>
      <GameTableView data={games} onDelete={deleteGame} onEdit={editGame} />
      <PaginationBar totalPages={totalPages} onPageChange={changePage}/>
    </div>
  )
}

export default AdminGameManagement