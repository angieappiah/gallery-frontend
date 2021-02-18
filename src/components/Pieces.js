import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'
import Likes from "./Likes";

class Pieces extends React.Component {
    state = {
        likes: 7
    }

    handleClick = () => {
        this.setState(State => {
           return {likes: State.likes +1}
        })
    }
 
    handleDelete = (piece) => {
        this.props.deletePiece(piece.id, piece.gallery_id)
    }

    render(){
        return(
            <div class="header">
                 <h2>These Are the Pieces in this style</h2>
                 <h5>Click On The X button at anytime to delete Piece(s)</h5>
                {this.props.pieces && this.props.pieces.map(piece =>
                <li key={piece.id}> NAME: {piece.name} ---  DESCRIPTION: {piece.description} LIKES: {piece.likes} 
                <button onClick={() => this.handleClick(piece)}> click </button>{this.state.likes}
                <button onClick={() => this.handleDelete(piece)}> Delete </button></li>)}
                    <br></br><br></br>
            </div>
        )
    }    

}
 export default connect(null, {deletePiece})(Pieces)