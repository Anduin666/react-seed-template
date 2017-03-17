import React from 'react';

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            test : "12131212113133"
        }
    }


    render () {
        return (
            <div>666661212ssssdsd
                {this.state.test}
            </div>
        );
    }
};