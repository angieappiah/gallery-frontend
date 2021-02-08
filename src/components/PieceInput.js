import React from 'react'
import { FormControl, FormGroup } from 'react-bootstrap';
import {connect} from "react-redux";
import {addPiece} from "../actions/addPiece";


class PieceInput extends React.Component {
    state = {
        name:'',
        description:'',
        featured_image: null

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleUpload = event => {
        this.setState({
            featured_image: event.target.files[0]
        })
      }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPiece(this.state, this.props.gallery.id)
        this.setState({
            name:'',
            description:'',
            featured_image: null
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <label>Add New Piece: </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='name'/>
                    <label>Description: </label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder='description'/>
                    <label>Add Image: </label>
                    <input type='file' accept='image/*'  name='featured_image' multiple={false} onChange={this.handleUpload}/>
                    <button className="btn btn-dark" type="submit">Submit</button>
                    </FormGroup>
                   
                </form>

            </div>
        )
    }
    
}
export default connect(null,{addPiece})(PieceInput)