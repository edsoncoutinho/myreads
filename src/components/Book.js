import React, { Component } from 'react'
import BookCover from './BookCover'
import BookShelfChanger from './BookShelfChanger'
import BookTitle from './BookTitle'
import BookAuthors from './BookAuthors'

class Book extends Component {
  render() {
    const { book } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <BookCover bookcover={book.cover} />
          <BookShelfChanger shelf={book.shelf} />
        </div>
        <BookTitle title={book.title} />
        <BookAuthors authors={book.author} />
      </div>
    )
  }
}

export default Book