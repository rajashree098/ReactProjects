import React from 'react';
import NameComponent from './childComponent/NameComponent';
import CommentText from './childComponent/commentText';
import CommentAction from './childComponent/CommentAction';
class CommentComponet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <NameComponent name={this.props.name}></NameComponent>
            <CommentText>{this.props.children}</CommentText>
            <CommentAction></CommentAction>
        </div> );
    }
}
 
export default CommentComponet;