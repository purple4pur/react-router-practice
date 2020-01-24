import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

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
