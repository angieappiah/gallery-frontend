import React from 'react'
import {Redirect} from 'react-router-dom'
import PiecesContainer from '../containers/PiecesContainer'
import { GalleryEdit} from '../components/GalleryEdit'

const Gallery = (props) =>{
    console.log(props)

    let gallery = props.galleries.filter(gallery => gallery.id == props.match.params.id)[0]
    console.log(gallery)
    

    return(
        <div>
        <h2>
            {gallery ? gallery.style : null}  
        </h2>
        <PiecesContainer gallery={gallery}/>
        <h3>
            <h3>Edit Gallery</h3>
            <GalleryEdit gallery={gallery}/>
        </h3>
        </div>
    )

}

export default Gallery