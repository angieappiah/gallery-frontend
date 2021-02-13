import React from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteGallery} from '../actions/deleteGallery';
import {Gallery} from '../components/Gallery';

class GalleryEdit extends React.Component{

    state = {
      style:''
    }

    handleDelete = (gallery) => {
        this.props.deleteGallery(gallery.id,this.props.gallery.id)
    }

    render(){
        return(
            <div>
               
                    <li key={gallery.id}><Link to={`/galleries/edit/${gallery.id}`}>{gallery.style}</Link> <button onClick={() => this.handleDelete(gallery)}>Delete</button></li>)
            </div>
        )
      
    }
}

export default connect (null, {deleteGallery})(GalleryEdit)