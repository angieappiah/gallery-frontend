
export const pieceLiker = (pieceId, galleryId) => {
    return(dispatch) =>{
      return fetch(`http://localhost:3000/api/v1/galleries/${galleryId}/pieces/${pieceId}`,{
           method: 'PATCH'

       })
       .then(response => response.json())
       .then(gallery => dispatch({type:'INCREASE_LIKES', payload:gallery}))
   }
}

 

