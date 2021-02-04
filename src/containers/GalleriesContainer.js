import React from "react";
import { connect } from "react-redux";
import {Route} from 'react-router-dom'
import Gallery from '../components/Gallery'
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
                <Route path ='/galleries/new'     component={GalleryInput}/>
                <Route path = '/galleries/:id'    render={(routerProps) => <Gallery{...routerProps} galleries={this.props.galleries}/>}/>
                <Route exact path = '/galleries'  render={(routerProps) => <Galleries{...routerProps} galleries={this.props.galleries}/>}/>
               
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