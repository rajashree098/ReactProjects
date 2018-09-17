import React, { Component } from 'react';

class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            programming: false,
            email:""
        }
        //this.onNameChange = this.onNameChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.captureChange = this.captureChange.bind(this);
        this.knowProgramming = this.knowProgramming.bind(this);
    }
    /* onNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }*/
    knowProgramming(e){
        console.log(e);
        this.setState({
            programming : e.target.checked
        })
    } 
    submitForm(e) {
        e.preventDefault()
        console.log("Submitted");
        console.log(this.state)
    }
    captureChange(e){
      this.setState({
        [e.target.name]:e.target.value  
      })
    }
   
    render() {
        return (
            <div>
                <h3>controlled Form</h3>
                <form onSubmit={this.submitForm}>
                    Name : <input type="text"
                     value={this.state.name} 
                     name="name"
                     onChange={this.captureChange} />
                    <br />
                    Email : <input type="text"
                     value={this.state.email} 
                     name="email"
                     onChange={this.captureChange} />
                    <br />
                    Know Programming:<input type="checkbox"
                    name="programming" value={this.state.programming} onChange = {this.knowProgramming} />
                    <button type="Submit">Save</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm;