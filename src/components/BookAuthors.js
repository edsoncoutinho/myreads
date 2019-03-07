import React, { Component } from 'react'

class BookAuthors extends Component {
  render() {
    const { authors } = this.props
    return (<div className="book-authors">{authors.join(', ')}</div>)
  }
}

export default BookAuthors