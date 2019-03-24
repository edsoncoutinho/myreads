import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchLink extends Component {
  render() {
    return (
      <Link to="/search" className="open-search">
        <button>Add a book</button>
      </Link>
    )
  }
}

export default SearchLink