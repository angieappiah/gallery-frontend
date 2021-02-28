import React from 'react'
import { connect } from "react-redux";
import PieceInput from '../components/PieceInput'
import {fetchGalleries} from '../actions/fetchGalleries'
import Pieces from '../components/Pieces'


class PiecesContainer extends React.Component {
    componentDidMount(){
        this.props.fetchGalleries()
    }

    render(){
        return(
            <div>
                <PieceInput gallery={this.props.gallery}/>
                <Pieces pieces={this.props.gallery && this.props.gallery.pieces}/>
                
            </div>

        )
    }

}
const mapStateToProps = state => {
    return {
        galleries: state.galleries
    }

}
export default connect(mapStateToProps, {fetchGalleries}) (PiecesContainer)