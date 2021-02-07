export const deletePiece = (pieceId, galleryId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/galleries/${galleryId}/ pieces/${pieceId}`,{
            method: 'DELETE'
        })
        .then(response => dispatch({type: 'DELETE_PIECE'}))

    }
}