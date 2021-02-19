
export const deletePiece = (pieceId, galleryId) => {
     return(dispatch) =>{
       return fetch(`http://localhost:3000/api/v1/galleries/${galleryId}/pieces/${pieceId}`,{
            method: 'DELETE'

        })
        .then(response => response.json())
        .then(gallery => dispatch({type:'DELETE_PIECE', payload:gallery}))
    }
}


export const likePiece = () => ({
    type: "INCREASE-COUNT"

})

