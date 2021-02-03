import { Button } from 'react-bootstrap';
import React from 'react';
import './Pagination.css';

const Pagination = ({ showsPerPage, totalShows, paginate, currentPage, setShowsPerPage }) => {
  const pages = Math.ceil(totalShows / showsPerPage);
  let buttons = currentPage === 1 ? currentPage - 1 : currentPage - 2;
  let previous = currentPage === 1 ? 1 : currentPage - 1;
  let next = currentPage === pages ? pages : currentPage + 1;
  
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
      <div className='pagination'>
        <div className='btn'>

          <button className='button' onClick={() => {
            setShowsPerPage(20)
            if(totalShows<=20)return paginate(1)
            if(showsPerPage === 20)return
            if(showsPerPage===50 && currentPage===Math.ceil(totalShows/50))return paginate(Math.ceil(totalShows/20))
            if(showsPerPage === 100 && currentPage===Math.ceil(totalShows/100))return paginate(Math.ceil(totalShows/20))
            paginate(Math.ceil(showsPerPage*currentPage/20))
            }}>20</button>

          <button className='button' onClick={() => {
            setShowsPerPage(50)
            if(totalShows<=50)return paginate(1)
            if(showsPerPage === 50)return
            if(showsPerPage===100 && currentPage===Math.ceil(totalShows/100))return paginate(Math.ceil(totalShows/50))
            paginate(Math.ceil(showsPerPage*currentPage/50))
            }}>50</button>

          <button className='button' onClick={() => {
            setShowsPerPage(100)
            if(showsPerPage === 100)return
            paginate(Math.ceil(showsPerPage*currentPage/100))
            }}>100</button>
        </div>

        <button className='button' onClick={() => paginate(previous)}><i className="fa fa-arrow-left"></i></button>
        
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className='button'>
            {number}
          </button>
        )).slice(buttons, currentPage+5)}
        
        <button className='button' onClick={() => paginate(next)}><i className="fa fa-arrow-right"></i></button>
      </div>
  );
};

export default Pagination;