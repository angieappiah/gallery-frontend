
export const uploadPhoto = (piece,galleryId) =>{

    return (dispatch) =>{
        const formData = new FormData()
        formData.append(piece, piece)
        fetch(`http://localhost:3000/api/v1/galleries/${galleryId}/pieces`,{
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(gallery => dispatch({type:'UPLOAD_PHOTO', payload:gallery}))
    }
}