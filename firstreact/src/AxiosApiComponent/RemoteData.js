import React, { Component } from 'react';
import axios from 'axios';
import DisplayUser from './DisplayUser';

class RemoteData extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            title: "",
            description: "",
            imageUrl: "",
            vote: 0,
            avatarUrl: "",
            url: ""
        }
        this.callRemoteData = this.callRemoteData.bind(this);
        this.insertData = this.insertData.bind(this);
        this.inputTitle = this.inputTitle.bind(this);
        this.inputdescription = this.inputdescription.bind(this);
        this.inputImage = this.inputImage.bind(this);
    }
    componentWillMount() {
        this.callRemoteData()
    }
    callRemoteData() {
        axios.get("http://localhost:4445/feedback")
            .then((response) => {
                this.setState({
                    users: response.data
                })
                console.log(this.state.users)
            })
    }
    displayData() {
        return (this.state.users.map((oneUser) => {
            console.log(oneUser)
            return (<DisplayUser
                key={oneUser.id}
                id={oneUser.id}
                title={oneUser.title}
                description={oneUser.description}
                url={oneUser.url}
                imageUrl={oneUser.imageUrl}
                avatarUrl={oneUser.avatarUrl}
                vote={oneUser.vote}
            >
            </DisplayUser>)
        }))
    }
    insertData(e) {
        e.preventDefault()
        const insertRecord = {
            "title": this.state.title,
            "description": this.state.description,
            "url": this.state.url,
            "imageUrl": this.state.imageUrl,
            "avatarUrl": this.state.avatarUrl,
            "vote": this.state.vote
        }
        axios.post("http://localhost:4445/feedback", insertRecord)
        .then((response) => {
            console.log(response.data)
        })
    }
    inputTitle(e) {
        this.setState({
            title: e.target.value
        })
    }
    inputdescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    inputImage(e) {
        const tempPath = "../images/" + e.target.files[0].name
        this.setState({
            imageUrl: tempPath,
            avatarUrl: tempPath,
            url: "www.Google.com"
        })
    }
    render() {
        return (
            <div>
                <table border="1">
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Votes</th>
                        <th>Title</th>
                        <th>description</th>
                    </tr>
                    </tbody>
                    <tbody>
                        {this.displayData()}
                    </tbody>
                </table>
                <form onSubmit={this.insertData}>
                    <label>Title:</label>
                    <input type="textarea"
                        value={this.state.title}
                        onChange={this.inputTitle}
                    />
                    <br></br>
                    <label>Description:</label>
                    <textarea
                        value={this.state.description}
                        onChange={this.inputdescription}
                    />
                    <label>Profile Pic:</label>
                    <input type="file"
                       
                        onChange={this.inputImage}
                        accept="image/png,image/jpeg"
                    />
                      <button type="submit">Insert Data</button>
                </form>
             </div>
        );
    }
}

export default RemoteData;