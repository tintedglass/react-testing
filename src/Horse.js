/**
 * Created by Kat on 12/11/2016.
 */
import React from 'react';

// New class that extends react
class Horse extends React.Component {

    // Render the component
    render(){
        return <div><b>{this.prop.name}</b> has a score of 55</div>;
    }
}

// Export component
export default Horse;