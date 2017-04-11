import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/header';
import {connect} from 'react-redux';
import userActions from '../actions/userActions'

 class App extends React.Component {

   fetchUser = ()=>{
       this.props.fetchUser({username: 'creator'});
   };

  componentWillMount = ()=>{
    this.fetchUser();
  };

   render(){
     return (
       <div className="container-fluid">
          <Header user={this.props.user} />
           {this.props.children}
        </div>
     );
   }
}


App.propTypes = {
  children: PropTypes.element
};


const mapStateToProps = (state, ownProps)=>{
  return {
     user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
   return {
       fetchUser: user => dispatch(userActions.fetchUser(user))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
