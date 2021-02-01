export function fetchGalleries(){
    fetch('http://localhost:3000/api/v1/galleries')
    .then(resp => resp.json())
    .then(data =>console.log(data))

}