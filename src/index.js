import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import {
  Home,
  Article,
  About,
  ArticleDetail,
  NotFound
} from './views'

ReactDOM.render(
  <Router>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Article} path="/article" exact />
      <Route component={About} path="/about" exact />
      <Route component={ArticleDetail} path="/article/:id" exact />
      <Route component={NotFound} path="/404" exact />
      <Redirect to="/404" />
      {/* 在这里Redirect的作用相当于switch的default，把其余情况重定向到404 */}
    </Switch>
  </Router>,
  document.querySelector('#root')
)