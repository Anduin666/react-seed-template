import React from 'react';
import { observer, inject } from 'mobx-react';


@inject('indexStore')
@observer
export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            test : '0001212'
        };

        console.log('aaSAs',this.props.indexStore);
    }

    online() {
        this.props.indexStore.shopId = '11';
    }

    render () {
        return (
            <div>
                <div onClick={this.online.bind(this)}>00000</div>
                {this.state.test}<br/>
                {this.props.indexStore.shopId}
            </div>
        );
    }
};