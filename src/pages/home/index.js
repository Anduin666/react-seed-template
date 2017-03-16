import React from 'react';

export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            test : "123"
        }
    }


    render () {

        return (
            <div>
                {this.state.test}
            </div>
        );
    }
};
