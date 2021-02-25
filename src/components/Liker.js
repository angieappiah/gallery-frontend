import React from 'react'
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import {connect} from "react-redux";
import { pieceLiker} from '../actions/pieceLiker'
import {addPiece} from "../actions/addPiece";
// import LikePieces from './LikePieces';


class Liker extends React.Component {
    render(){
        return(
            <div className="like-button">
                <Button onClick={this.props.pieceLiker}>
                {/* <h4>Likes:<Badge>{this.props.piece.likes}</Badge></h4> */}

                </Button>

            </div>
        )
    }
}
export default Liker