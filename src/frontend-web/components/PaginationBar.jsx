import React, { useState } from 'react';

import "./PaginationBar.css"

const PaginationBar = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination-bar'>
      {pageNumbers.map((number) => (
        <button key={number} style={number === currentPage ? {backgroundColor: 'white', color: "#4CAF50", border: "1px solid #4CAF50"} : {}} 
            onClick={() => {
            handleClick(number)
            changePage(number);
            }
        }>
          {number}
        </button>
      ))}
    </div>
  );
};

export default PaginationBar;