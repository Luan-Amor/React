import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse bg-dark'>
    
    <ul className="nav mb-1">
    <li className="nav-item">
        <a className="nav-link" href="#"> 
            <i className='fa fa-calendar-check-o'></i> TODO List
        </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#/todos" >Tasks</a>
    </li>
    <li className="nav-item">
      <a className="nav-link"  href="#/about">About</a>
    </li>
  </ul>
  </nav>
)