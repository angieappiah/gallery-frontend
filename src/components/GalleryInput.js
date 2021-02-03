import React from 'react';

class GalleryInput extends React.Component{

    state = {style:'' }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = () =>{

    }


    render(){
      return(
          <div>
             <form onSubmit = {this.handleSubmit}>
                 <label> Create A New Style:</label>
                 <input type= 'text' placeholder= 'Style' value={this.state.style} name='style' onChange={this.handleChange} /><br/>
                 <input type= 'submit'/>
            </form> 
          </div>
      )
    }
}

export default GalleryInput