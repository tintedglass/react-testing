import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import * as firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        let messageRef = firebase.database().ref('messages');
        messageRef.off();

        let setMessage = function(data) {
            let val = data.val();
            this.displayMessage(data.key, val.text);
            }.bind(this);

        messageRef.limitToLast(12).on('child_added', setMessage);
        messageRef.limitToLast(12).on('child_changed', setMessage);
    }

    displayMessage(key, text){
        let thisMessage = <Message key={key} text={text} />;
        this.setState({
            messages: this.state.messages.concat(thisMessage)
        })
    }

    render() {
        return (<div>{this.state.messages}</div>);
    }
}

export default App;
