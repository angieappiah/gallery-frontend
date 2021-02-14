export const editGallery= (data) => {
	

    return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/galleries/${data.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(gallery => {
          dispatch({
          type: 'EDIT_GALLERY',
          payload: gallery
        })
      })
    }
  }