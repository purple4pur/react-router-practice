import React, { Component } from 'react'
import {
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom'
import {
  Home,
  Article,
  About,
  ArticleDetail
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
          <Route component={ArticleDetail} path="/article/:id" exact />
          <Redirect from="/" to="/"/> 
          {/* 在这里Redirect的作用相当于switch的default，把其余情况重定向到首页 */}
        </Switch>
      </>
    )
  }
}
