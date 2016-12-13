/**
 * Created by kcoley on 12/12/2016.
 */
import React from 'react';

// New class that extends react
class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.key,
            text: this.props.text
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            text: "Booger"
        })
    }


    // Render the component
    render(){
        return <div className="messageContainer"><b>Message {this.state.text}</b> <button onClick={this.handleClick}>Edit</button></div>
    }
}

export default Message;
