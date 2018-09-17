import React from 'react'
class CommentAction extends React.Component {
    constructor() {
        super()
        this.state = { 
            like:0,
            unlike:0
         }
         this.likeMe = this.likeMe.bind(this);
         this.unLike = this.unLike.bind(this);
    }
    likeMe = function(){
        console.log("Liked");
       this.setState({
           like : this.state.like + 1 
       })
    }
    unLike(){
        console.log("Unliked");
        this.setState({
            unlike : this.state.unlike + 1
        })
    }
    render() { 
        return ( <div>
           <button onClick={this.likeMe}>Like {this.state.like}</button>
           <button onClick = {this.unLike}>DisLike {this.state.unlike}</button>
        </div> );
    }
}
 
export default CommentAction;
