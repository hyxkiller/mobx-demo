import React, { Component } from 'react';
import Test1 from '../../test/test1';
import Test2 from '../../test/test2';

class Funds extends Component {
    toBottom = () => {
        document.getElementById('haha').scrollIntoView(false)
    }
    render() {
        return (
            <div id="haha">
                资金管理
                <button onClick={this.toBottom}>toBottom</button>
                <Test1></Test1>
                <Test2></Test2>
            </div>
        );
    }
}

export default Funds;