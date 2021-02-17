import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'
import LikePieces from './LikePieces'
import { Badge } from 'react-bootstrap';

class Likes extends React.Component {
    state = {
        count: 0
    }


    handleClick = () => {
        this.setState(State => {
           return {count: State.count +1}
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
                    <li key={piece.id}> NAME: {piece.name} ---  DESCRIPTION: {piece.description} 
                    <button onClick={() => this.handleClick(piece)}>click</button>{this.state.count}
                    <button onClick={() => this.handleDelete(piece)}>X</button></li>)}
                     {/* <LikePiecesButton /> */}
                    <br></br><br></br>
            </div>
        )
    }

     

}
 export default connect(null, {deletePiece})(Likes)