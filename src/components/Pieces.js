import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'
import { updateLikes} from '../actions/updateLikes'


class Pieces extends React.Component {
    state = {
        pieces:{}
    
    }

    handleClick = (piece) => {
        this.props.updateLikes(piece.id, piece.gallery_id) 
    }
    
    handleDelete = (piece) => {
        this.props.deletePiece(piece.id, piece.gallery_id)
    }

    render(){
        const sortedPieces = this.props.pieces &&  this.props.pieces.sort(function (a, b) {
            return b.likes - a.likes  })
        return(
            <div class="header">
                 <h1>These Are The Pieces In This Style</h1>
                  {this.props.pieces && sortedPieces.map(piece =>
                <ul class="one">NAME: {piece.name} <br/> DESCRIPTION: {piece.description} <br/>LIKES {piece.likes}
                <button className="like-button" onClick={() => this.handleClick(piece)}> LIKE ✅</button> 
                <button onClick={() => this.handleDelete(piece)}>DELETE ❌ </button></ul>)}
                <br/>
            </div>
        )
    }    
}
 export default connect(null, { deletePiece,updateLikes})(Pieces)
