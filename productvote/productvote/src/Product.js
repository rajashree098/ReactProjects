import React, { Component } from 'react';
import '../../productvote/node_modules/semantic-ui/dist/semantic.css';


class Product extends Component {
constructor(){
    super()
    this.upVote=this.upVote.bind(this)
    this.downVote=this.downVote.bind(this)
}
     upVote() {
        console.log("Upvote called");   
        this.props.onCheck(this.props.id,1)
    }
    downVote() {
        console.log("Downvote called");
        this.props.onCheck(this.props.id,0)
    }
    render() {

        return (
            <div className="item">
                <div className="image">
                    <img src={this.props.imageurl} />
                </div>
                <div className="middle aligned content">
                    <div className="header">
                        {this.props.vote}
                        <a onClick={this.upVote}>
                            <i className="large caret up icon"></i>
                        </a>
                        <a onClick={this.downVote}>
                            <i className="large caret down icon"></i>
                        </a>
                    </div>
                    <div className="description">
                        <a href={this.props.url}>{this.props.title}</a>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img src={this.props.avatarurl} height="20" width="20" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;