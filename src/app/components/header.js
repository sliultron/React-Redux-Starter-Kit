import React from 'react';
import { Link, IndexLink } from 'react-router';

export default function Header(props) {
  return (
    <nav className="nav">
      <ul>
           <li><IndexLink to="/">Home</IndexLink></li>
      </ul>
    </nav>
  )
}



