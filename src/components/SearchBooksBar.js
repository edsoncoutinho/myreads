import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchBooksBar extends Component {
  static propTypes = {
    handleSearchBooks: PropTypes.func.isRequired
  }
  render() {
    const { handleSearchBooks } = this.props

    const onSearchBooks = event => handleSearchBooks(event.target.value)

    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text"
            placeholder="Search by title or author"
            onChange={onSearchBooks}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooksBar