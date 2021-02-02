import React from 'react';

state = {
    style: ''
}

class GalleryInput extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <label>Create a new style:</label><br></br>
                    <input type = 'text' placeholder = 'style' value={this.state.style}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default GalleryInput