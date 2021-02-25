import React from 'react'

class LikePieces extends React.Component{
    state = {
        likes: 2
    }

    handleClick = ()=>{
        this.setState ({likes: this.state.likes+1})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>❤️</button>{this.state.likes}
            </div>
        )
    }  
}
export default LikePieces
