import React from 'react';

// New class that extends react
class Movies extends React.Component {
    // Create a constructor that takes in properties from <Class property="value">
    constructor(props) {
        super(props);
        // Set initial state values
        this.state = {
            name: "avatar"
        };
    }

    // Create a new function that returns a state value
    printName() {
        return this.state.name;
    }

    // Render the component (this gets called with <Movies />
    render(){
        return <div>My name is {this.printName()} with a rating of {this.props.rating}</div>;
    }
}

// Export class to app
export default Movies;