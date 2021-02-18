import React from 'react';
import { connect } from "react-redux";
import {fetchArtworks} from '../actions/fetchArtworks'
import {Route , Link, Switch} from 'react-router-dom'
import Galleries from './Galleries';

class Artworks extends React.Component{
    componentDidMount(){
        this.props.fetchArtworks()}

        render(){
            const {galleries} =this.props
            return(
                <div>
                    {this.props.galleries && this.props.galleries.map(gallery =>
                    <li key={gallery.id}> <Link to={`/galleries/${gallery.id}`}>{gallery.style}</Link></li>)}
                </div>
            )
        }
}
const mapStateToProps = state => {
    return {
        galleries: state.galleries
    }
}
export default connect(mapStateToProps, {fetchArtworks})(Artworks)