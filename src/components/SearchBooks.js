import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import BooksGrid from './BooksGrid'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    handleBooks: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      filteredBooks: [],
      loading: true
    }
  }

  handleSearchBooks = query => {
    BooksAPI.search(query)
      .then((filteredBooks = []) => {
        filteredBooks = filteredBooks && filteredBooks.error
          ? []
          : this.handleBookShelf(filteredBooks)

        this.setState({ filteredBooks })
      })
  }

  handleBookShelf = books => books.map((book = []) => {
    this.props.books.forEach(element => {
      if (element.id === book.id) book.shelf = element.shelf
    })
    return book
  })

  render() {
    return (
      <div className="search-books">
        <SearchBooksBar
          handleSearchBooks={this.handleSearchBooks}
        />
        <div className="search-books-results">
          <BooksGrid books={this.state.filteredBooks} handleBooks={this.props.handleBooks} />
        </div>
      </div>
    )
  }
}

export default SearchBooks