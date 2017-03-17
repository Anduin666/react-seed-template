import React from 'react';

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }


    render () {
        this.state.test = "sadasdsad";
        return (
            <div>
                {this.state.test}
            </div>
        );
    }
};