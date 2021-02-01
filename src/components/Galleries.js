import React from 'react';

const Galleries = (props) => {
    return(
        <div>
           {props.galleries.map(gallery=> <li key={gallery.id}> {gallery.style}</li>)} 
        </div>
    )
}

export default Galleries