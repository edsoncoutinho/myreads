import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    handleBooks: PropTypes.func.isRequired
  }
  render() {
    const { book, handleBooks } = this.props

    const handleBookUpdate = (book, shelf) => {
      BooksAPI.update(book, shelf)
        .then(() => handleBooks())
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={(event) => handleBookUpdate(book, event.target.value)} defaultValue={book.shelf ? book.shelf : 'none'}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger