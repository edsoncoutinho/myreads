import React, { Component } from 'react'
import Header from './Header'
import Bookshelf from './Bookshelf'
import SearchLink from './SearchLink'

class ListBooks extends Component {
  render() {
    const { books, showSearchPage } = this.props

    const types = [
      { name: 'currentlyReading', title: 'Currently Reading' },
      { name: 'wantToRead', title: 'Want to Read' },
      { name: 'read', title: 'Read' }
    ]

    const bookshelves = types.map((type) => {
      const filteredBooks = books.filter((book) => (book.shelf === type.name))
      return <Bookshelf title={type.title} books={filteredBooks} />
    })

    return (
      <div className="list-books">
        <Header title="MyReads" />
        <div className="list-books-content">
          <div>
            {bookshelves}
          </div>
        </div>
        <SearchLink
          showSearchPage={showSearchPage}
        />
      </div>
    )
  }
}

export default ListBooks