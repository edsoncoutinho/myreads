import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookAuthors extends Component {
  static propTypes = {
    authors: PropTypes.array
  }
  render() {
    const { authors = [] } = this.props
    const formated = authors.length ? authors.join(' | ') : 'No author'

    return (<div className="book-authors">{formated}</div>)
  }
}

export default BookAuthors