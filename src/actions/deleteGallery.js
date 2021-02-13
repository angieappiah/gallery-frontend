export const deleteGallery = (galleryId) => {
    return(dispatch) =>{
      return fetch(`http://localhost:3000/api/v1/galleries/${galleryId}`,{
           method: 'DELETE'

       })
       .then(response => response.json())
       .then(gallery => dispatch({type:'DELETE_GALLERY', payload:gallery}))
   }
}