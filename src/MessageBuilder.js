/**
 * Created by kcoley on 12/14/2016.
 */
/**
 * Created by kcoley on 12/12/2016.
 */
import React from 'react';
import * as firebase from 'firebase';

// New class that extends react
class MessageBuilder extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state of this message, id is the key from firebase, text is the text from firebase
        this.state = {
            newMessageText: ""
        };

        this.changeMessage = this.changeMessage.bind(this);
        this.addNewMessage = this.addNewMessage.bind(this);
    }

    // When the edit form changes change the text state to value of form input
    changeMessage(e) {
        this.setState({
            newMessageText: e.target.value
        });
    }

    addNewMessage() {
        let messagesRoot = firebase.database().ref('messages');
        let newMessage = {text: this.state.newMessageText};
        messagesRoot.push(newMessage);
    }

    render() {
        return (<div><input type="text" defaultValue="Default Value3" onChange={this.changeMessage} /> <button onClick={this.addNewMessage}>New Message</button></div>)
    }
}


export default MessageBuilder;