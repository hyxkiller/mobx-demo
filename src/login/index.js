import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <p>登录页</p>
                <a href="/home.html">回到首页</a>
            </div>
        );
    }
}

export default Login;
ReactDOM.render(<Login />, document.getElementById('root'));
