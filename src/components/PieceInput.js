import React from 'react'
import {connect} from "react-redux";
import {addPiece} from "../actions/addPiece";
import {likePiece} from "../actions/likePiece";


class PieceInput extends React.Component {
    state = {
        likes:0
    }


    handleClick() {
        this.setState(({count}) => ({
          count: count + 1
        }));
      }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }  

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPiece(this.state, this.props.gallery.id)
        this.props.likePiece(this.state, this.props.gallery.id)
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
                    <input type="submit" />
                    <br></br><br></br><br></br> 
                </form>
                {this.props.pieces && this.props.pieces.map(piece =>
                    <li key={piece.id}> NAME: {piece.name} ---  DESCRIPTION: {piece.description} <button onClick={() => this.handleClick(piece)}>click</button>{this.state.count}<button onClick={() => this.handleDelete(piece)}>X</button></li>)}
                    <br></br><br></br>
            </div>
        )
    }
    
}


export default connect(null,{ addPiece ,likePiece})(PieceInput)

