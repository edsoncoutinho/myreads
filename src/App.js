import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
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

  render() {
    const books = this.state.books
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks
            books={books}
            handleBooks={this.handleBooks}
          />
        )} />
        <Route exact path='/' render={() => (
          <ListBooks
            books={books}
            handleBooks={this.handleBooks}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
