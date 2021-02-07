import React from 'react';
import {Route, Link } from 'react-router-dom';
import Gallery from './Gallery'

const Galleries = (props) => {
    return(
        <div>
           {props.galleries.map(gallery=>
           <li key={gallery.id}>
            <Link to={`/galleries/${gallery.id}`}>{gallery.style}</Link>
            </li>)} 
        </div>
    )
}

export default Galleries