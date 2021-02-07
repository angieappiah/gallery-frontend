
export default function galleryReducer(state = {galleries: []}, action) {
    switch( action.type){
        case 'FETCH_GALLERIES':  
        return {galleries: action.payload}

        case 'ADD_GALLERY':
        return {...state, galleries: [...state.galleries, action.payload] }

        case 'ADD_PIECE':
            let pieces = state.pieces.map(piece => {
                if (piece.id === action.payload.id) {
                  return action.payload
                } else {
                  return piece
                }
              })
              return {...state, pieces: pieces}

            case 'DELETE_PICE':
                let piecesTwo = state.pieces.map(piece => {
                    if (piece.id === action.payload.id) {
                      return action.payload
                    } else {
                      return piece
                    }
                  })
                  return {...state, pieces: piecesTwo}
        default:
            return state

    }
  
   
}