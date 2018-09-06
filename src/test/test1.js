import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import Hello from '../store/helloModel'
import { autorun } from 'mobx';

@inject('Hello')
@observer
class Test1 extends Component {

    add = () => {
        Hello.changeNum()
    }

    componentDidMount() {
        this.monitor()
    }

    monitor = autorun(() => {
        console.log(12333333);
    })

    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Test1;