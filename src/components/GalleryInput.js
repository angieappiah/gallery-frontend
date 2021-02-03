import React from 'react';
import { connect  } from "react-redux";
import {addGallery} from "../actions/addGallery";

class GalleryInput extends React.Component{

    state = {style:'' }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) =>{
      event.preventDefault()
      this.props.addGallery(this.state)

    }


    render(){
      return(
          <div>
             <form onSubmit = {this.handleSubmit}>
                 <label> Create A New Style:</label>
                 <input type= 'text' placeholder= 'Style' value={this.state.style} name='style' onChange={this.handleChange} /><br/>
                 <input type= 'submit'/>
            </form> 
          </div>
      )
    }
}

export default connect (null, {addGallery}) (GalleryInput)