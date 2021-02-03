
export default function galleryReducer(state = {galleries: []}, action) {
    switch( action.type){
        case 'FETCH_GALLERIES':  
        return {galleries: action.payload}
        case 'ADD_GALLERY':
        return {...state, galleries: [...state.galleries, action.payload] }
        default:
            return state

    }
  
   
}