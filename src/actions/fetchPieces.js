import Pieces from "../components/Pieces"

export function fetchPieces(){
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/pieces')
    .then(resp => resp.json())
    .then(Pieces => dispatch({
      type: 'FETCH_PIECES',
      payload: Pieces
    }))
    }

}