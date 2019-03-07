import React, { Component } from 'react'
import Book from './Book'

class BooksGrid extends Component {
  render() {
    const listBooks = this.props.books.map((book) => (
      <li key={book.id}><Book book={book} /></li>
    ))
    return (<ol className="books-grid">{listBooks}</ol>)
  }
}

export default BooksGrid