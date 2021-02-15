import React from 'react';
import { connect  } from 'react-redux';
import {addGallery} from '../actions/addGallery';

class GalleryInput extends React.Component{

    state = {
      style:''
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) =>{
      event.preventDefault()
      this.props.addGallery(this.state)
      this.setState({
        style:''
      })

    }


    render(){
      return(
          <div>
             <form onSubmit={this.handleSubmit}>
                 <label> Create A New Style:</label>
                 <input type='text' placeholder='Style' value={this.state.style} name="style" onChange={this.handleChange}/><br/>
                 <button type="submit">Submit</button>
            </form> 
          </div>
      )
    }
}

export default connect (null, {addGallery})(GalleryInput)