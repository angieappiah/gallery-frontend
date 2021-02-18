import React from 'react'
import {connect} from 'react-redux'
import { likePiece} from '../actions/likePiece'
import LikePieces from './LikePieces'
import { Badge } from 'react-bootstrap';

class Likes extends React.Component {
    state = {
        count: 0
    }


    handleClick = () => {
        this.props.likePiece(piece.id, piece.gallery_id)
        this.setState(State => {
           return {count: State.count +1}
        })
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
 export default connect(null, {likePiece})(Likes)