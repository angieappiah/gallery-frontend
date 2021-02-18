
export const likePiece= (piece,galleryId) =>{
    return (dispatch) =>{
        fetch(`http://localhost:3000/api/v1/galleries/${galleryId}/pieces`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
             body: JSON.stringify(piece)
        })
        .then(response => response.json())
        .then(gallery => dispatch({type:'LIKE-PIECE', payload:gallery}))
    }
}