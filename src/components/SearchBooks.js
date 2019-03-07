import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import BooksGrid from './BooksGrid'

class SearchBooks extends Component {
  render() {
    const { showSearchPage } = this.props
    return (
      <div className="search-books">
        <SearchBooksBar showSearchPage={showSearchPage} />
        <div className="search-books-results">
          <BooksGrid books={[]} />
        </div>
      </div>
    )
  }
}

export default SearchBooks