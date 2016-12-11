/**
 * Created by Kat on 12/10/2016.
 */
import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

    constructor() {
        super();
        this.state = {
            speed: 10
        };
     }

     componentDidMount(){
        const rootRef = firebase.database().ref().child('react');
        const speedRef = rootRef.child('speed');
        speedRef.on('value', snap => {
            console.log(snap.val());
            this.setState({
                speed: snap.val()
            });
        });
     }

     render() {
        return <h1>{this.state.speed}</h1>;
     }

}

export default App;
