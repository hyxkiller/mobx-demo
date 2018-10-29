import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import User from '../user';
import Funds from '../funds';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="header" style={{ width: '100%', height: 40, background: '#7f8fa4' }}>
                    <a href="/login.html">登录</a>
                    <a href="/register.html">注册</a>
                    <Link to="/home.html/user">个人中心</Link>
                    <Link to="/home.html/funds">资金管理</Link>
                </div>
                <div className="content">
                    <Route path="/home.html/user" component={User} />
                    <Route path="/home.html/funds" component={Funds} />
                    {/* <Redirect from="/*" to="/" />                     */}
                </div>
            </div>
        );
    }
}

export default Home;