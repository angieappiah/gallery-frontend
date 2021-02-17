
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
          let galleriesDelete = state.galleries.map(gallery => {
            if (gallery.id === action.payload.id) {
              return action.payload
            } else {
              return gallery
            }
          })
          return {...state, galleries: galleriesDelete}
          case 'LIKE-FAVORITE':
            state.count++;
            return state;
  
        default:
            return state

    }

  
   
}

        

