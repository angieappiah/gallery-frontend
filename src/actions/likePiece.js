
export const likePiece= (pieceId, galleryId) =>{
    return (dispatch) =>{
        fetch(`http://localhost:3000/api/v1/galleries/${galleryId}/pieces/${pieceId}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            //  body: JSON.stringify(piece)
        })
        .then(response => response.json())
        .then(gallery => dispatch({type:'LIKE-PIECE', payload:gallery}))
    }
}