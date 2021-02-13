export function fetchArtworks(){
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/galleries')
    .then(resp => resp.json())
    .then(artworks => dispatch({
      type: 'FETCH_ARTWORKS',
      payload: artworks
    }))
    }

}