import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({ books }))
      })
  }

  handleBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books })
      })
  }

  handleSearchPage = (bool) => {
    this.setState({ showSearchPage: bool })
  }

  render() {
    const books = this.state.books
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks
            books={books}
            handleBooks={this.handleBooks}
            showSearchPage={(bool) => this.handleSearchPage(bool)}
          />
        ) : (
            <ListBooks
              books={books}
              handleBooks={this.handleBooks}
              showSearchPage={(bool) => this.handleSearchPage(bool)}
            />
          )}
      </div>
    )
  }
}

export default BooksApp
