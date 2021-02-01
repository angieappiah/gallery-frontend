import React from 'react';
import { connect } from "react-redux";
import GalleriesContainer from './containers/GalleriesContainer'

class App extends React.Component {

  render(){
    return(
      <div className="App">
        <GalleriesContainer/>
     </div>
    )

  }

}

export default App;
