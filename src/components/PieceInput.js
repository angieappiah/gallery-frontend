import React from 'react'
import {connect} from "react-redux";
import { FormControl, FormGroup } from 'react-bootstrap';
import {addPiece} from "../actions/addPiece";


class PieceInput extends React.Component {
    state = {
        name:'',
        description:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }  

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPiece(this.state, this.props.gallery.id)
        this.setState({
            name:'',
            description:''
        })
    }


    render(){
        return(
            <div className="piece-form">
                <form onSubmit={this.handleSubmit}>  
                  <FormGroup>
                    <label>Add New Piece: </label>
                    <FormControl  type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='name'/><br/>
                    <label>Description: </label>
                    <FormControl type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder='description' /><br/>
                    <button type="submit">Submit</button>
                    </FormGroup>
                    <br></br><br></br><br></br> 
                </form>
            </div>
        )
    }
    
}
export default connect(null,{addPiece})(PieceInput)