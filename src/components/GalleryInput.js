import React from 'react';


class GalleryInput extends React.Component{
    render(){
      return(
          <div>
             <form>
                 <label> Create A New Style:</label>
                 <input type= 'text' placeholder= 'Style' /><br></br>
                 <input type= 'submit'/>
            </form> 
          </div>
      )
    }
}

export default GalleryInput