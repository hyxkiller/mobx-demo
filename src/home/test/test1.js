import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import Hello from '../store/helloModel'
import { autorun } from 'mobx';
function debounce(fn, debounceTime){
    var timer;
    return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, debounceTime);
    }
}
@inject('Hello')
@observer
class Test1 extends Component {
    // add = debounce(Hello.changeNum,1000)
    add = debounce(() => Hello.changeNewNum(20),1000)
            // add = _.debounce(() => {
            //     Hello.changeNewNum(20)
            // },1000)

    componentDidMount() {
        this.monitor()
    }

    monitor = autorun(() => {
        console.log(12333333);
    })

    render() {
        return (
            <div>
                <button onClick={debounce(() => Hello.changeNewNum(20),1000)}>+</button>
            </div>
        );
    }
}

export default Test1;