import React from 'react';
import { connect } from "react-redux";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PiecesContainer from './containers/PiecesContainer'
import GalleriesContainer from './containers/GalleriesContainer'
import Galleries from './components/Galleries';

class App extends React.Component {

  render(){
    return(
      <Router>
           <div className="App">
           <NavBar />
           <Route exact path="/about" component={About} />
           <Route exact path="/" component={Home} />
        <GalleriesContainer/>
     </div>

      </Router>

    )

  }

}

export default App;
