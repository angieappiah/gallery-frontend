import React from 'react';
import { connect } from "react-redux";
import {fetchArtworks} from '../actions/fetchArtworks'
import {Route , Switch} from 'react-router-dom'
import Galleries from '../components/Galleries';



class Artworks extends React.Component{
    componentDidMount(){
        this.props.fetchArtworks()}

        render(){
            let galleries=this.props.galleries
            return(
                <div>
                    <Galleries galleries={galleries}/>
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