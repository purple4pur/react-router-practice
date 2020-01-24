import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom'
import { Header } from 'components'

export default class Article extends Component {
  render() {
    return (
      <>
        <Header />
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
