import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
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
    )
  }
}
