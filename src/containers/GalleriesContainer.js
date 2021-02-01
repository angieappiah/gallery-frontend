import React from "react";
import { connect } from "react-redux";
import {fetchGalleries} from '../actions/fetchGalleries'
import Galleries from '../components/Galleries';
import GalleryInput from '../components/GalleryInput';

class GalleriesContainer extends React.Component{
    componentDidMount(){
        this.props.fetchGalleries()

    }

    render(){
        return(
            <div>
                <Galleries galleries={this.props.galleries}/>
                <GalleryInput/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        galleries: state.galleries
    }

}

export default connect(mapStateToProps, {fetchGalleries}) (GalleriesContainer)