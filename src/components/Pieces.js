import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'

class Pieces extends React.Component {
    state = {}
 
    handleDelete = (piece) =>{
        this.props.deletePiece(piece.id,piece.gallery_id)
    }

    render(){
        return(
            <div>
                {this.props.pieces && this.props.pieces.map(piece =>
                    <li key={piece.id}>{piece.name} - {piece.description} <button onClick={() => this.handleDelete(piece)}>Delete</button></li>
                    
                    )}
            </div>
        )
    }

     

}
 export default connect(null,{deletePiece})(Pieces)