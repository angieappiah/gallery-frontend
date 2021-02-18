import React from 'react'
import LikePieces from './LikePieces'
import Pieces from "./Pieces";

class Likes extends React.Component{

    state = {
        likes: 0
    }

    handleClick = ()=>{
        this.setState ({likes: this.state.likes+1})
    }

    

    render(){
        return(
            <div>
                <button onClick={this.props.LikePieces}>
                {this.props.pieces && this.props.pieces.map(piece =>
                    <li key={piece.id}> NAME: {piece.name} ---  DESCRIPTION: {piece.description} <button onClick={() => this.handleClick(piece)}>ok</button></li>)}

                </button>
            </div>
        )
    }

}
export default Likes