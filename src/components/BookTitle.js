import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    const { title } = this.props
    return (<div className="book-title">{title}</div>)
  }
}

export default BookTitle