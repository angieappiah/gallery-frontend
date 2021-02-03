import React from 'react';
import Gallery from './Gallery'

const Galleries = (props) => {
    return(
        <div>
           {props.galleries.map(gallery=> <div key={gallery.id}><Gallery gallery={gallery}/></div>)} 
        </div>
    )
}

export default Galleries