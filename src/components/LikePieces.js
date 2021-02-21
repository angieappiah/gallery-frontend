import React from 'react'

class LikePieces extends React.Component{
    state = {
        count: 0
    }

    handleClick = ()=>{
        this.setState ({count: this.state.count+1})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>❤️</button>{this.state.count}
            </div>
        )
    }  
}
export default LikePieces
