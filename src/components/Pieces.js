import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'

const Pieces = (props) => {
    console.log(props.pieces)

    handleDelete = (piece) =>{
        props.deletePiece
    }

 

    return(
        <div>
            {props.pieces && props.pieces.map(piece =>
                <li key={piece.id}>{piece.name} - {piece.description} <button onClick={() => this.handleDelete(piece)}>Delete</button></li>
                
                )}
        </div>
    )
     

}
 export default connect(null,{deletePiece})(Pieces)