import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import HelloModel from '../store/helloModel'
import { autorun } from 'mobx';

@inject('Hello')
@observer
class Test2 extends Component {
    state = {
        total: null,
    }
    componentDidMount() {
        HelloModel.changeNewNum(this.props.Hello.data)
        this.setState({
            total: HelloModel.total,
        }) 
    }
    componentWillUpdate() {
        HelloModel.changeNewNum(this.props.Hello.data)
        autorun(()=>{
            console.log('autoRun');
        },{
            delay: 500,
        })
    }

    reset = () => {
        let data = Math.round(Math.random() * 100)
        HelloModel.reset(data)
    }

    render() {
        return (
            <div>
                <p>number: {this.props.Hello.data}</p>
                <p>newNumber: {this.props.Hello.newData}</p>
                <p>obj: {this.props.Hello.obj.test}</p>                
                <p>total: {this.state.total}</p>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

export default Test2;