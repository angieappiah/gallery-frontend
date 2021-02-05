import React from 'react'
//import PiecesContainer from '../containers/PiecesContainer'

const Pieces = (props) => {

    return(
        <div>
            {props.pieces && props.pieces.map(piece =>
                <li key={piece.id}>{piece.name}-{piece.description}</li>
                )}

        </div>
    )
}
 export default Pieces