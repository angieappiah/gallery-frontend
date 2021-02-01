
export function fetchGalleries(){
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/galleries')
    .then(resp => resp.json())
    .then(galleries => dispatch({
      type: 'FETCH_GALLERIES',
      payload: galleries
    }))
    }

}