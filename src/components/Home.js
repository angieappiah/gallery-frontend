import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Home = () => {

    return (
      <div className="home">
        <div className="home-center">
          <h3 className="home-logo">BAMAS</h3>
          <h4 className="home-subheader">Art is Life</h4>
          <Link to="/galleries">
          <Button className="btn btn-dark"> See galleries</Button>
          </Link>
        
        </div>
      </div>
    );
  }
  
  export default Home;
