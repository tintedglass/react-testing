/**
 * Created by kcoley on 12/12/2016.
 */
import React from 'react';

// New class that extends react
class Message extends React.Component {

    // Render the component
    render(){
        return <div className="messageContainer"><b>Message {this.props.text}</b></div>
    }
}

export default Message;