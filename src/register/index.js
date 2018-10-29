import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Register extends Component {
    render() {
        return (
            <div>
                <p>注册页</p>
                <a href="/home.html">回到首页</a>
            </div>
        );
    }
}

export default Register;

ReactDOM.render(<Register />, document.getElementById('root'));
