import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="navbar">

      <div className='container'>    
        <Link to='/'>   
        <span className="Icon">LucasDev/{">"}</span>
        </Link>
        
        <Link to='/about'>
          <span className='about'>About</span>
        </Link>
      </div>
      <div className='searchBar'><SearchBar 
       onSearch={onSearch}
        />
      </div>
        
    </nav>
  );
};

export default Nav;
