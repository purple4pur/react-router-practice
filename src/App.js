import React, { Component } from 'react'
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import {
  Home,
  Article,
  About
} from './views'

export default class App extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/article">文章</Link>
            </li>
            <li>
              <Link to="/about">关于</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Article} path="/article" exact />
          <Route component={About} path="/about" exact />
        </Switch>
      </>
    )
  }
}
