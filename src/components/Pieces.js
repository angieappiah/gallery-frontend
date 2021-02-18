import React from 'react'
import {connect} from 'react-redux'
import { deletePiece} from '../actions/deletePiece'

class Pieces extends React.Component {
    state = { count: 0}

    handleClick = ()=>{
        this.setState(previousState => {
            return {
              count: previousState.count + 1
            }
          })
    }
 
    handleDelete = (piece) => {
        this.props.deletePiece(piece.id, piece.gallery_id)
    }

    render(){
        return(
            <div class="header">
                 <h2>These Are the Pieces in this style</h2>
                 <h5>Click On The X button at anytime to delete Piece(s)</h5>
                {this.props.pieces && this.props.pieces.map(piece =>
                <li key={piece.id}> NAME: {piece.name} ---  DESCRIPTION: {piece.description} LIKES: {piece.likes} 
                <button type='button' onClick={() => this.handleClick(piece)}>❤️<h5>{this.state.count}</h5></button>
                <button onClick={() => this.handleDelete(piece)}> Delete </button></li>)}
                    <br></br><br></br>
            </div>
        )
    }

     

}
 export default connect(null, {deletePiece})(Pieces)