import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'
import { pieceLiker} from '../actions/pieceLiker'


class Pieces extends React.Component {
    state = {
        pieces:{}
    
    }

    handleClick = (piece) => {
        this.props.pieceLiker(piece.id, piece.gallery_id)
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
                <ul class="one">NAME: {piece.name}--DESCRIPTION: {piece.description} -- {piece.likes}
                <button className="like-button" onClick={() => this.handleClick(piece)}> Like </button> 
                <button onClick={() => this.handleDelete(piece)}>X</button></ul>)}
                <br></br><br></br>
            </div>
        )
    }    
}
 export default connect(null, { deletePiece,pieceLiker})(Pieces)

//  <Liker piece={piece} pieceLiker={this.handleClick}/>