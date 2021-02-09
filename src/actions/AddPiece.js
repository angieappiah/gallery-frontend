
export const addPiece = (piece,galleryId) =>{

    return (dispatch) =>{
        fetch(`http://localhost:3000/api/v1/galleries/${galleryId}/pieces`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(piece)
        })
        .then(response => response.json())
        .then(gallery => dispatch({type:'ADD_PIECE', payload:gallery}))
    }
}

