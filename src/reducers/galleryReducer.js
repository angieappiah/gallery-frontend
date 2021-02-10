
export default function galleryReducer(state = {galleries: []}, action) {
  switch (action.type) {
    case 'FETCH_GALLERIES':
      return {galleries: action.payload}
    case 'ADD_GALLERY':
      return {...state, galleries: [...state.galleries, action.payload]}
      case 'ADD_PIECE':
        let galleries = state.galleries.map(gallery => {
          if (gallery.id === action.payload.id) {
            return action.payload
          } else {
            return gallery
          }
        })
        return {...state, galleries: galleries}
        case 'DELETE_PIECE':
          let galleriesTwo = state.galleries.map(gallery => {
            if (gallery.id === action.payload.id) {
              return action.payload
            } else {
              return gallery
            }
          })
          return {...state, galleries: galleriesTwo}
          case 'EDIT_GALLERY':
          let galleriesThree = state.galleries.map(gallery => {
            if (gallery.id === action.payload.id) {
              return action.payload
            } else {
              return gallery
            }
          })
          return {...state, galleries: galleriesThree}
        default:
            return state

    }
  
   
}

        

