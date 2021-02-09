import React from 'react'
import {connect} from "react-redux";
import {addPiece} from "../actions/addPiece";


class PieceInput extends React.Component {
    state = {
        name:'',
        description:'',
        featured_image: null

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          this.setState({
            featured_image: URL.createObjectURL(event.target.files[0])
          });
        }
       }
    

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPiece(this.state, this.props.gallery.id)
        this.setState({
            name:'',
            description:'',
            featured_image: null
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                
                    <label>Add New Piece: </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='name'/><br/>
                    <label>Description: </label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder='description'/><br/>
                    <label>Add Image: </label>
                    <input type='file' accept='image/*'  name='featured_image' multiple={false} onChange={this.onImageChange}/>
                    <img id="target" src={this.state.featured_image} alt={''}/>
                    <button type="submit">Submit</button>
                    <br></br><br></br><br></br>
                 
                   
                </form>

            </div>
        )
    }
    
}
export default connect(null,{addPiece})(PieceInput)