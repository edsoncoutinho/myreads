import React, { Component } from 'react'
import Header from './Header'
import Bookshelf from './Bookshelf'
import SearchLink from './SearchLink'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBooks: PropTypes.func.isRequired
  }

  render() {
    const { books, handleBooks } = this.props

    const types = [
      { name: 'currentlyReading', title: 'Currently Reading' },
      { name: 'wantToRead', title: 'Want to Read' },
      { name: 'read', title: 'Read' }
    ]

    const bookshelves = types.map((type) => {
      const filteredBooks = books.filter((book) => (book.shelf === type.name))
      return <div key={type.name}><Bookshelf title={type.title} books={filteredBooks} handleBooks={handleBooks} /></div>
    })

    return (
      <div className="list-books">
        <Header title="MyReads" />
        <div className="list-books-content">
          {bookshelves}
        </div>
        <SearchLink />
      </div>
    )
  }
}

export default ListBooks