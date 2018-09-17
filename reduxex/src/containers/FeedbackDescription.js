import React from 'react';
import { connect } from 'react-redux';
import descriptionAction from '../actions/updateDescriptionAction'
import { bindActionCreators } from 'redux';

class FeedBackDescription extends React.Component {
    constructor(props) {
        super()
        this.state = {
            description: {}
        }
        this.updateDescription = this.updateDescription.bind(this)
    }
    updateDescription(e) {
        const temp = Object.assign({}, this.props.selectedFBprops, {
            title: e.target.value
        })
        this.setState({
            description: temp
        })
        console.log('updated description', this.state.description)
    }
    submitForm(e) {
        this.props.updatedDescription(this.state.description)
    }
    render() {
        if (this.props.selectedFBprops == null) {
            return (
                <div>
                    <ul><li>Click on any title</li></ul>
                </div>
            )
        }

        return (<div>
            <ul>
                <li>Description will come here</li>
                <li>{this.props.selectedFBprops.description}</li>
            </ul>
            <div>
                <form onSubmit={() => this.submitForm}>
                    Update Description:
                    <input type="text"
                        value={this.state.description.title}
                        onChange={this.updateDescription} />
                    <br />
                    <input type="submit" />
                </form>
            </div>
        </div>);
    }
}
function connentStateToComponentAsProps(state) {
    return ({
        selectedFBprops: state.oneFB
    })
}
function bindActionCreatorToComponentAsProps(dispatch) {
    return bindActionCreators({ updatedDescription: descriptionAction }, dispatch)
}
export default connect(connentStateToComponentAsProps, bindActionCreatorToComponentAsProps)(FeedBackDescription);