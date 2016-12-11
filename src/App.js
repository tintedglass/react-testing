import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        };
    }
    componentDidMount() {
        const database = firebase.database().ref('/messages')
        /*var message = {text: "Hello"}

        database.push(message)*/
        database.once('value', snap => {
            snap.forEach(childSnap => {
                var childData = childSnap.val();
                var updatedMessages = this.state.messages.concat(childData.text)
                this.setState({
                    messages: updatedMessages
                })
            })
        })
    }



    render() {
        return (<div>
            {this.state.messages.map((message, idx) => {
                return <div>{message}</div>
            })}
        </div>);
    }
}

export default App;
