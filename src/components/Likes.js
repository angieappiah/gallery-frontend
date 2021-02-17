import React from 'react'
import {connect} from 'react-redux'
import { likeFavorite} from '../actions/likeFavorite'
import LikePieces from './LikePieces'


class Likes extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(State => {
           return {count: State.count +1}
        })
    }
 
    handleDelete = (piece) => {
        this.props.deletePiece(piece.id, piece.gallery_id)
    }


    render(){
        return(
            <div class="header">
                {this.props.pieces && this.props.pieces.map(piece =>
                    <li key={piece.id}> NAME: {piece.name} ---  DESCRIPTION: {piece.description} <button onClick={() => this.handleClick(piece)}>*like</button>{this.props.count}<button onClick={() => this.handleDelete(piece)}>X</button></li>)}
                    <br></br><br></br>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}
 export default connect(mapStateToProps, {likeFavorite})(Likes)