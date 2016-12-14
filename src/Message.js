/**
 * Created by kcoley on 12/12/2016.
 */
import React from 'react';
import * as firebase from 'firebase';

// New class that extends react
class Message extends React.Component {
    constructor(props) {
        super(props);
        // Set initial state of this message, id is the key from firebase, text is the text from firebase
        this.state = {
            id: this.props.id,
            text: this.props.text,
            editing: false
        };

        // Bind methods to this instance of Message
        this.editMessage = this.editMessage.bind(this);
        this.changeMessage = this.changeMessage.bind(this);
        this.edit = this.edit.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderMessage = this.renderMessage.bind(this);
    }

    // When the edit button is clicked set the editing state to true
    edit() {
        this.setState({
            editing: true
        });
    }

    // Render the message with an edit form
    renderForm() {
        return (
            <div><input type="text" defaultValue={this.state.text} onChange={this.changeMessage} /> <button onClick={this.editMessage}>Save</button></div>
        )
    }

    // Render the message with an edit button
    renderMessage(){
        return (
            <span>{this.state.text}
            <button onClick={this.edit}>Edit</button></span>
        )
    }

    // When the edit form changes change the text state to value of form input
    changeMessage(e) {
        this.setState({
            text: e.target.value,
        });
    }

    // When the save button is pressed
    editMessage() {
        // Set editing to false
        this.setState({
          editing:false
        });

        // Save current state of text to the database
        let database = firebase.database().ref('messages').child(this.state.id).child('text');
        database.set(this.state.text);

    }


    // Render the form if state is editing, otherwise render the message
    render() {
        return(
            <div className="messageContainer">
                {(this.state.editing) ? this.renderForm()
                                    : this.renderMessage()}
            </div>)

    }
}

export default Message;
