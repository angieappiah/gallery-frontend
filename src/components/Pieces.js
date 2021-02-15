import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'

class Pieces extends React.Component {
    state = {}
 
    handleDelete = (piece) => {
        this.props.deletePiece(piece.id, piece.gallery_id)
    }

    render(){
        return(
            <div class="header">
                 <h2>These Are the Pieces in this style</h2>
                 <h5>Click On The X button at anytime to delete Piece(s)</h5>
                {this.props.pieces && this.props.pieces.map(piece =>
                    <li key={piece.id}> NAME: {piece.name} ---  DESCRIPTION: {piece.description}  <button onClick={() => this.handleDelete(piece)}>X</button></li>)}
                    <br></br><br></br>
            </div>
        )
    }

     

}
 export default connect(null, {deletePiece})(Pieces)