import React, { Component } from 'react'
import { Header } from 'components'

export default class ArticleDetail extends Component {
  render() {
    return (
      <>
        <Header />
        文章详情 {this.props.match.params.id}
      </>
    )
  }
}
