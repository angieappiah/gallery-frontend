import { pieceLiker } from "../actions/pieceLiker"

const initialState =
{
    galleries: [],
    // liked: 0
}
export default function galleryReducer(state = initialState, action) {
  // let update; 
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
          case 'INCREASE_LIKES':
            let gallerieslike = state.galleries.map(gallery => {
              if (gallery.id === action.payload.id) {
                return action.payload+1
              } else {
                return gallery
              }
            })
            return {...state, galleries: gallerieslike}
        default:
            return state
    }   
}


    // const {liked} = state
            // return {...state, liked: liked+1}
          // case 'INCREASE_LIKES':
            // const {likes} = state
            // return ({...state, likes: likes+1})
        

