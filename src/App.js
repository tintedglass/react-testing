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

        database.once('value', snap => {
            this.setState({
                messages: snap.val()
            })
        })
    }



    render() {
        return (<div>{alert(this.state.messages.toSource())}</div>);
    }
}

export default App;
