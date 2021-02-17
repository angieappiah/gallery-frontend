
export const likePiece= (pieceId) =>{
    return (dispatch) =>{
        fetch(`http://localhost:3000/api/v1/galleries/pieces/${pieceId}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(pieceId)
        })
        .then(response => response.json())
        .then(gallery => dispatch({type:'LIKE-PIECE', payload:gallery}))
    }
}