import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';


 class App extends React.Component {
   render(){
     return (
       <div>
          <Header />
           {this.props.children}
        </div>
     );
   }
}


App.propTypes = {
  children: PropTypes.element
};

export default App;
