
// const addLikes = (piece) => {
//     return {type: 'INCREASE_LIKES',
//     piece}
// }

export const pieceLiker = (piece,pieceId) => {
    //const likedPiece = Object.assign(piece, { likes: piece.likes + 1 })
    return(dispatch) =>{
      return fetch(`http://localhost:3000/api/v1/pieces/${pieceId}`,{
           method: 'PATCH'

       })
       .then(response => response.json())
       .then(gallery => dispatch({type:'INCREASE_LIKES', payload:gallery}))
   }
}

 

