import React from 'react'
import {Redirect} from 'react-router-dom'

const Gallery = (props) =>{

    let gallery = props.galleries[props.match.params.id-1]
    console.log(gallery)

    return(
        <li>
            {gallery ? gallery.style : null}
            
        </li>
    )

}

export default Gallery