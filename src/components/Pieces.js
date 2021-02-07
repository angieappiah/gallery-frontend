import React from 'react'
//import PiecesContainer from '../containers/PiecesContainer'

const Pieces = (props) => {

    const handleDelete = ()=>{
        
    }

    return(
        <div>
            {props.pieces && props.pieces.map(piece =>
                <li key={piece.id}>{piece.name} - {piece.description} <button onClick={this.handleDelete}>Delete</button></li>
                
                )}

        </div>
    )
}
 export default Pieces