import React from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';


const Header = (props) => {
  return (
    <header>

        <nav className="navbar navbar-default">
            <div className="container-fluid">
              <ul className ="nav navbar-nav">
                  <li><IndexLink to="/">Home</IndexLink></li>
                    <li><Link to="/Game">Game</Link></li>
              </ul>

            <ul className="nav navbar-nav navbar-right">
                  <li><a>{props.user.username}</a></li>
              </ul>
          </div>
        </nav>



    </header>
  );
};

Header.propTypes ={
    user: PropTypes.object
}


export default Header;


