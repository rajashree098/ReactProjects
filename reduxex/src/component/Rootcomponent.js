import React from 'react';
import FeedBackTitle from '../containers/FeedbackTitle';
import FeedBackDescription from '../containers/FeedbackDescription';
class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div id='root'>
            <p>I will use container</p>
            <FeedBackTitle />
            <hr></hr>
            <FeedBackDescription />
        </div>);
    }
}

export default RootComponent;