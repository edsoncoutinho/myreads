import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBooks: PropTypes.func.isRequired
  }
  render() {
    const { books, handleBooks } = this.props
    const listBooks = books.map((book) => (
      <li key={book.id}><Book book={book} handleBooks={handleBooks} /></li>
    ))
    return (<ol className="books-grid">{listBooks}</ol>)
  }
}

export default BooksGrid