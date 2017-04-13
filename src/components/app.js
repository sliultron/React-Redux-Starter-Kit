import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/header';
import {connect} from 'react-redux';
import userActions from '../actions/userActions';

 class App extends React.Component {


  componentWillMount = ()=>{
    this.fetchUser();
  };

  fetchUser = ()=>{
       this.props.fetchUser({username: 'creator'});
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
  children: PropTypes.element,
  fetchUser: PropTypes.func,
  user: PropTypes.object
};


const mapStateToProps = (state, ownProps)=>{
  return {
     user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
   return {
       fetchUser: user => dispatch(userActions.fetchUser(user))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
