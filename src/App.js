import React from 'react';
import { connect } from "react-redux";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GalleriesContainer from './containers/GalleriesContainer'
import Artworks from './containers/Artworks';


class App extends React.Component {

  render(){
    return(
      <Router>
           <div className="App">
           <NavBar />
            <GalleriesContainer/>
           <Route exact path="/" component={Home} />
           <Route exact path="/about" component={About} />
           <Route exact path="/galleries/:id" component={Artworks} />   
     </div>
      </Router>

    )

  }

}

export default App;
