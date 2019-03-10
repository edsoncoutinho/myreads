import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class Bookshelf extends Component {
  render() {
    const { title, books, handleBooks } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={books} handleBooks={handleBooks} />
        </div>
      </div>
    )
  }
}

export default Bookshelf