import React from 'react'
import {connect} from "react-redux";


class PieceInput extends React.Component {
    state = {
        name:'',
        description:''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {
        event.preventDefault()
        addPiece(this.state, this.props.id)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Piece: </label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='name'/>
                    <label>Description: </label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange} placeholder='description'/>
                    <input type= 'submit'/>
                   
                </form>

            </div>
        )
    }
    
}
export default connect(null) (PieceInput)