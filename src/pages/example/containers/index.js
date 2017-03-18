import React from 'react';

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            test : "0"
        }
    }


    render () {

        return (
            <div>1121212sdasdasd
                {this.state.test}
            </div>
        );
    }
};