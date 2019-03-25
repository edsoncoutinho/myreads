import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { throttle, debounce } from "throttle-debounce"

class SearchBooksBar extends Component {
  static propTypes = {
    handleSearchBooks: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { query: "" }
    this.searchThrottled = throttle(500, this.searchQuery);
    this.searchDebounced = debounce(500, this.searchQuery);
  }

  searchQuery = query => {
    this.props.handleSearchBooks(query)
  }

  changeQuery = event => {
    this.setState({ query: event.target.value }, () => {
      const query = this.state.query;
      (query.length < 5)
        ? this.searchThrottled(query)
        : this.searchDebounced(query)
    });
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={this.state.query}
            onChange={this.changeQuery}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooksBar