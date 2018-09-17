import React from 'react';
import ReactDOM from 'react-dom'

class LifeCycleComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            status :0
        }
        this.updateState = this.updateState.bind(this)
    }
    componentWillMount = () => {
      console.log("component will be displayed in view")
    }
    componentDidMount() {
        console.log("component displayed");
    }
    componentWilUpdate(){
        console.log("component will update its states now")
    }
    updateState(){
        this.setState({
            status : this.state.status + 1 
        })
        if(this.state.status >=10){
            ReactDOM.unmountComponentAtNode(document.getElementById("lifeCycle"))
        }
    }
   

    render() {
        return (
            <div>
                helloooooooooo
                <button onClick = {this.updateState}>state  change {this.state.status}</button>
            </div>
        );
    }
}

export default LifeCycleComponent;