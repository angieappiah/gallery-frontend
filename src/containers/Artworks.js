import React from 'react';
import { connect } from "react-redux";
import {fetchArtworks} from '../actions/fetchArtworks'
import {Route , Switch} from 'react-router-dom'
import Galleries from '../components/Galleries';


class Artworks extends React.Component{
    componentDidMount(){
        this.props.fetchArtworks()}

        render(){
            const {galleries} =this.props
            return(
                <div>
                    <Galleries galleries={galleries} />
                    {this.props.galleries && this.props.galleries.map(gallery =>
                    <li key={gallery.id}>{gallery.style} <button onClick={() => this.handleDelete(galleries)}>Delete</button></li>)}
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