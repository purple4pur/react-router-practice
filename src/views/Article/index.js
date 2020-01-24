import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import ArticleDetail from './ArticleDetail'

export default class Article extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/article/1">文章一</Link>
            </li>
            <li>
              <Link to="/article/2">文章二</Link>
            </li>
          </ul>
        </nav>
      </>
    )
  }
}
