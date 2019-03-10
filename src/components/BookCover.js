import React, { Component } from 'react'

class BookCover extends Component {
  render() {
    const { imageLinks } = this.props
    const bookCover = imageLinks && imageLinks.thumbnail
      ? imageLinks.thumbnail
      : `https://via.placeholder.com/128x193.png?text=MyReads`
    return (
      <div
        className="book-cover"
        style={{ width: 128, height: 193, backgroundImage: `url(${bookCover})` }}>
      </div>
    )
  }
}

export default BookCover