import React from 'react';
import {Route, Link } from 'react-router-dom';
import Gallery from './Gallery'
import GalleryInput from './GalleryInput'


const Galleries = (props) => {
    return(
        <div>
           {props.galleries.map(gallery=> <h4 key={gallery.id}>
            <Link to={`/galleries/${gallery.id}`}>{gallery.style}</Link>
            </h4>)} 
        </div>
    )
}

export default Galleries