import React from 'react'
import PieceInput from '../components/PieceInput'
import Pieces from '../components/Pieces'


class PiecesContainer extends React.Component {

    render(){
        return(
            <div>
                <PieceInput gallery={this.props.gallery}/>
                <Pieces pieces={this.props.gallery && this.props.gallery.pieces}/> 
            </div>

        )
    }

}
export default PiecesContainer