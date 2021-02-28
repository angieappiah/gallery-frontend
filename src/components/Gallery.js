import React from 'react'
import {Redirect} from 'react-router-dom'
import PiecesContainer from '../containers/PiecesContainer'

const Gallery = (props) =>{
 

    let gallery = props.galleries.filter(gallery => gallery.id == props.match.params.id)[0]
    console.log(gallery)
    

    return(
        <div>
        <h2>
            {gallery ? gallery.style : null}  
        </h2>
        <PiecesContainer gallery={gallery}/>
        </div>
    )

}

export default Gallery