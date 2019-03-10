import React, { Component } from 'react'
import Book from './Book'

class BooksGrid extends Component {
  render() {
    const { books, handleBooks } = this.props
    const listBooks = books.map((book) => (
      <li key={book.id}><Book book={book} handleBooks={handleBooks} /></li>
    ))
    return (<ol className="books-grid">{listBooks}</ol>)
  }
}

export default BooksGrid