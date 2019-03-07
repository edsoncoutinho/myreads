import React, { Component } from 'react'

class SearchLink extends Component {
  render() {
    const { showSearchPage } = this.props
    return (
      <div className="open-search">
        <button onClick={() => showSearchPage(true)}>Add a book</button>
      </div>
    )
  }
}

export default SearchLink