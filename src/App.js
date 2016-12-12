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
        let database = firebase.database().ref('messages');
        database.off();

        let setMessage = function(message) {
            let messageValues = message.val();
            this.createMessage(message.key, messageValues.text);
            }.bind(this);

        database.limitToLast(12).on('child_added', setMessage);
        database.limitToLast(12).on('child_changed', setMessage);
    }

    createMessage(key, text){
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
