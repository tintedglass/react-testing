/**
 * Created by kcoley on 12/12/2016.
 */
import React from 'react';
import * as firebase from 'firebase';

// New class that extends react
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            text: "Booger"
        })

        let database = firebase.database().ref('messages').child(this.state.id).child('text');
        //let thisMessage = database.child(this.state.id);

        database.set("Booger");

    }


    // Render the component
    render(){
        return <div className="messageContainer"><b>Message {this.state.text}</b> <button onClick={this.handleClick}>Edit</button></div>
    }
}

export default Message;
