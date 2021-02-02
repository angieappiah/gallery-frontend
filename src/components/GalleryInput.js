import React from 'react';

class GalleryInput extends React.Component{

    state = {style:'' }


    render(){
      return(
          <div>
             <form>
                 <label> Create A New Style:</label>
                 <input type= 'text' placeholder= 'Style' value={this.state.style} /><br/>
                 <input type= 'submit'/>
            </form> 
          </div>
      )
    }
}

export default GalleryInput