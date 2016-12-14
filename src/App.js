import React, { Component } from 'react';
import './App.css';
import Message from './Message';
import MessageBuilder from './MessageBuilder';
// Import all firebase modules
import * as firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // Set initial state of messages array to blank
            messages: {}
        };
    }


    componentDidMount() {
        // Connect to database
        const database = firebase.database().ref('messages');
        // Remove all callbacks from objects
        database.off();

        // setMessage function, @param message: a message object
        const setMessage = (message) => {
            // Gets the values of the message object (a key and text in this case)
            let messageValues = message.val();
            // Run the createMessage function to create a Message component using this messages key and text
            this.createMessage(message.key, messageValues.text);
            };

        // Grab the last 12 rows from the database, on child added, run the setMessage function above
        database.on('child_added', setMessage);
    }

    // Creates a message @param key: the key of the message in database @param text: the text of the message
    createMessage(key, text){
        // Create a new Message component with key and text df
        let thisMessage = <Message key={key} id={key} text={text} />;
        let newMessages = this.state.messages;
        newMessages[key] = thisMessage;

        // Add this new Message component to this state messages array
        this.setState({
            messages: newMessages
        })
    }

    // Return the messages array of Message components
    render() {
        return (
            <div>
                {Object.keys(this.state.messages).map((key) => {
                    return <div>{this.state.messages[key]}</div>
                })}

                <MessageBuilder />
            </div>
        );
    }
}

export default App;
