import React from 'react'

class LikePieces extends React.Component{
    state = {
        likes: 0
    }

    handleClick = ()=>{
        this.setState ({likes: this.state.likes+1})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>like piece</button>
                {this.state.likes}
            </div>
        )
    }
    
}

export default LikePieces
