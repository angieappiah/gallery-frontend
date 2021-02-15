import React from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router-dom';
import {editGallery} from '../actions/editGallery';
import Gallery from './Gallery'
import GalleryInput from './GalleryInput'

class GalleryEdit extends React.Component{

    state = {
      style:''
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleDelete = (gallery) => {
        this.props.editGallery(gallery.id,this.props.gallery.id)
    }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     this.props.editGallery(gallery)
    //     this.setState({
    //         style:'',
         
    //     })
    // }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Style' value={this.state.style} name="style" onChange={this.handleChange}/><br/>
               
                <input type="submit"/>
            </form>
            
            </div>
        )
      
    }
}

GalleryEdit.defaultProps ={
    galleries: {}
}

export default connect (null, {editGallery})(GalleryEdit)