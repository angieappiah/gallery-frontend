import React from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import {Route , Link, Switch} from 'react-router-dom'
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
                <Switch>
                <Route path ='/galleries/new'  component={GalleryInput}/>
                <Route path = '/galleries/:id' render={(routerProps) => <Gallery{...routerProps} galleries={this.props.galleries}/>}/>
                <Route path = '/galleries'     render={(routerProps) => <Galleries{...routerProps} galleries={this.props.galleries}/>}/>
                </Switch>  
                {/* {this.props.galleries && this.props.galleries.map(gallery =><li key={gallery.id}> <Link to={`/galleries/${gallery.id}`}>{gallery.style}</Link></li>)} */}
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