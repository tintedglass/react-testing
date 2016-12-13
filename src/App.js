import React, { Component } from 'react';
import './App.css';
import Message from './Message';
// Import all firebase modules
import * as firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        this.state = {
            // Set initial state of messages array to blank
            messages: []
        };
    }

    componentDidMount() {
        // Connect to database
        let database = firebase.database().ref('messages');
        // Remove all callbacks from objects
        database.off();

        // setMessage function, @param message: a message object
        let setMessage = function(message) {
            // Gets the values of the message object (a key and text in this case)
            let messageValues = message.val();
            // Run the createMessage function to create a Message component using this messages key and text
            this.createMessage(message.key, messageValues.text);
            // Bind this to this function
            }.bind(this);

        // Grab the last 12 rows from the database, on child added, run the setMessage function above
        database.limitToLast(12).on('child_added', setMessage);

        // Grab the last 12 rows from the database and on change, do a thing
        //database.limitToLast(12).on('child_changed', doathing);
    }

    // Creates a message @param key: the key of the message in database @param text: the text of the message
    createMessage(key, text){
        // Create a new Message component with key and text df
        let thisMessage = <Message key={key} id={key} text={text} />;

        // Add this new Message component to this state messages array
        this.setState({
            messages: this.state.messages.concat(thisMessage)
        })
    }

    // Return the messages array of Message components
    render() {
        return (<div>{this.state.messages}</div>);
    }
}

export default App;
