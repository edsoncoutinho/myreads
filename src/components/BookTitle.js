import React, { Component } from 'react'

class BookTitle extends Component {
  render() {
    const { title } = this.props
    return (<div className="book-title">{title}</div>)
  }
}

export default BookTitle