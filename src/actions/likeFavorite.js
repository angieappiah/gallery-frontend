
export const likeFavorite= (piece) =>{
    return (dispatch) =>{
        fetch(`http://localhost:3000/api/v1/galleries/pieces/${piece.id}`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(piece)
        })
        .then(response => response.json())
        .then(gallery => dispatch({type:'LIKE-FAVORITE', payload:gallery}))
    }
}