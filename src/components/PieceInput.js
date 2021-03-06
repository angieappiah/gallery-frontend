import React from 'react'
import {connect} from "react-redux";
import {addPiece} from "../actions/addPiece";

class PieceInput extends React.Component {
    state = {
        name:'',
        description:'',
        likes:0
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
            description:'',
            likes:0
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>  
                    <label>Add New Piece: </label><br></br>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='name'/><br/>
                    <label>Description: </label><br></br>
                    <textarea name='description' value={this.state.description} onChange={this.handleChange} placeholder='description'/><br/>
                    <label>Likes: </label><br></br>
                    <input type='integer' name='likes' value={this.state.likes} onChange={this.handleChange} placeholder='likes'/><br/>
                    <input type="submit" />
                    <br></br><br></br><br></br> 
                </form>
            </div>
        )
    }
    
}


export default connect(null,{ addPiece })(PieceInput)

