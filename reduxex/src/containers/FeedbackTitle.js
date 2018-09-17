import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectFeedback from '../actions/index'
class FeedBackTitle extends React.Component {

    displayAllTitle() {
        return this.props.feedbackTitles.map((fb) => {
            return (<li key={fb.id}
                onClick={() => this.feedBackClicked(fb)}
            >{fb.title}</li>)
        })
    }
feedBackClicked(fb){
    console.log(this.props.selectedFeedback(fb))
}
    render() {
        return (<div>
            <ul>
                {this.displayAllTitle()}
            </ul>
        </div>);

    }
}

function connectStoreToComponent(copyOfStore) {
    console.log(copyOfStore)
    return {
        feedbackTitles: copyOfStore.allFB
    }
}
function bindActionCreatorToComponentAsProps(dispatch) {
    return bindActionCreators({ selectedFeedback: selectFeedback }, dispatch)
}
export default connect(connectStoreToComponent,bindActionCreatorToComponentAsProps)(FeedBackTitle);