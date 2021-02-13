export const addGallery= (data) => {
	

    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/galleries', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(gallery => {
          if (gallery.error) {
            alert(gallery.error)
          } else {
          dispatch({
          type: 'ADD_GALLERY',
          payload: gallery
        })
      }})
    }
  }

  