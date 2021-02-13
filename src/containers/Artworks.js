import React from 'react';
import {fetchArtworks} from '../actions/fetchArtworks'
import Galleries from '../components/Galleries';
import GalleryInput from '../components/GalleryInput';

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

export default connect(mapStateToProps, {fetchArtworks}) (Artworks)